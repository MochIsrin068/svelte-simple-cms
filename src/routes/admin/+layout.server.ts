import { env } from "$env/dynamic/private";
import type { LayoutServerLoad } from "../$types";
import jwt from 'jsonwebtoken'

export const load = (async({request, cookies}) => {
    const jwtToken = cookies.get('jwtToken') || ""
    let isLoggedIn = false
    jwt.verify(jwtToken, env.JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                isLoggedIn = false
                console.log('Token sudah kedaluwarsa');
                cookies.delete('jwtToken', { path: '/' })
            } else {
                isLoggedIn = false
                console.error('Token tidak valid:', err);
                cookies.delete('jwtToken', { path: '/' })
            }
        } else {
            isLoggedIn = true
            console.log('Payload:', decoded);
        }
    });

    const currentUrl = request.url
    const isActivePageKey = currentUrl.includes("blog") ? "blog" : currentUrl.includes("category") ? "category" : currentUrl.includes("user-access") ? "user-access" : "home"

    return {
        currentUrl,
        isActivePageKey,
        isLoggedIn
    }
}) satisfies LayoutServerLoad