import type { PageServerLoad } from "./$types"
import prisma from "$lib/prisma"
export const load = (async ({ params, request }) => {
    const slug = params.slug
    
    const id = slug.split(" ")?.[1]
    
    const detailBlog = await prisma.post.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            author: true,
            categories: true
        }
    })

    return {
        detailBlog,
        currentUrl: request.url
    }
}) satisfies PageServerLoad