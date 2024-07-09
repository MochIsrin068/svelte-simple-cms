import type { PageServerLoad } from "../$types";
import prisma from '$lib/prisma'
import type { Actions } from './$types';

export const actions: Actions = {
    // if just one action: the name is default, if more than one, default is not valid
    add: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');

        if (typeof name === 'string' && name.length > 0) {
            await prisma.category.create({
                data: { name }
            });
        }

        return { success: true };
    },
    delete: async ({ request }: any) => {
        const formData = await request.formData();
        const id = formData.get('id');

        await prisma.category.delete({
            where: {
                id: parseInt(id)
            }
        })
        return { success: true };
    }   
};

export const load = (async () => {
    let categories = await prisma.category.findMany()

    return {
        categories,
    }
}) satisfies PageServerLoad