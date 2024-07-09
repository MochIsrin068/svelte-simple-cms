import type { Actions, PageServerLoad } from "../$types";
import prisma from '$lib/prisma'

export const load = (async ({ cookies }) => {
    const totalBlogDraft = await prisma.post.count({
        where: {
            published: false
        }
    })

    const totalBlogPublshed = await prisma.post.count({
        where: {
            published: true
        }
    })

    const totalUser = await prisma.user.count()
    const totalCategory = await prisma.category.count()

    return {
        totalBlogDraft, 
        totalBlogPublshed, 
        totalCategory, 
        totalUser,
    }
}) satisfies PageServerLoad


export const actions: Actions = {
    default: async ({cookies}) => {
        cookies.delete('jwtToken', {path: '/'})

        return {
            logout: true
        }
    }
}