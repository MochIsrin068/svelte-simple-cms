import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";
import type { Actions } from "./$types";
import prisma from "$lib/prisma";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from "$env/dynamic/private";

export const load = (({ params, request, cookies }) => {
    const jwtToken = cookies.get('jwtToken') || ""
    let isLoggedIn = false

    jwt.verify(jwtToken, env.JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                isLoggedIn = false
                console.log('Token sudah kedaluwarsa');
                cookies.delete('jwtToken', {path: '/'})
            } else {
                isLoggedIn = false
                console.error('Token tidak valid:', err);
                cookies.delete('jwtToken', {path: '/'})
            }
        } else {
            isLoggedIn = true
            console.log('Payload:', decoded);
        }
    });

    return {
        currentUrl: request.url,
        isLoggedIn
    }
}) satisfies PageServerLoad

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData()
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            const data = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if (!email || !password) {
                return fail(422, {
                    isSuccess: false,
                    error: "Email or password is required!"
                })
            } else {
                if (data) {
                    const validPassword = await bcrypt.compare(password, data.password);
                    if (validPassword) {
                        const token = jwt.sign({ id: data.id, name: data.name, role: data.role, email: data.email }, env.JWT_SECRET, { expiresIn: '1h' });

                        await cookies.set("jwtToken", token, {
                            path: "/"
                        })
                        return {
                            isSuccess: true
                        }
                    }
                    return fail(401, {
                        isSuccess: false,
                        error: "Password wrong!"
                    })
                } else {
                    return fail(401, {
                        isSuccess: false,
                        error: "User not found!"
                    })
                }
            }
        } catch (error) {
            console.log("error", error)
            return fail(401, {
                error: "something when wrongh" // must be collect from the error catching
            })
        }

    }
}