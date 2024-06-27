import type { PageServerLoad } from "../$types";
import prisma from '$lib/prisma'

export const load = (async () => {
    const categories = await prisma.category.findMany()
    
    
    return {
        categories,
    }
}) satisfies PageServerLoad