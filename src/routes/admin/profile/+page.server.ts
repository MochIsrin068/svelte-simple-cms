import prisma from "$lib/prisma";
import type { PageServerLoad } from "../$types";

export const load = (async() => {
    const profile = await prisma.profile.findUnique({
        where: {
            id: 1,
        },
        include: {
            user: true
        }
    })
    return {
        profile
    }
}) satisfies PageServerLoad