import type { PageServerLoad } from "./$types";
import prisma from '$lib/prisma'

export const load = (async({request}) => {
    const blogs = await prisma.post.findMany({
        include: {
            author: true,
            categories: true
        }
    })

    let highlightBlog = blogs[0];
    let blog = blogs.slice(1);

    // Data yang diinginkan
    let data = {
        highlightBlog,
        blog
    };

    return {
        originBlogs: blogs,
        blogs: blog,
        highlightBlog,
        currentUrl: encodeURIComponent(request.url)
    }
}) satisfies PageServerLoad