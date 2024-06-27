import type { PageServerLoad } from "../$types";
import prisma from '$lib/prisma'

export const load = (async () => {
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
        totalBlogDraft, totalBlogPublshed, totalCategory, totalUser
    }
}) satisfies PageServerLoad