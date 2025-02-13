import type { Actions, PageServerLoad } from '../$types';
import prisma from '$lib/prisma';
import bcrypt from 'bcrypt';

export const actions: Actions = {
	add: async ({ request }) => {
		const saltRounds = 10;

		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const role = formData.get('role') as "ADMIN" | "USER";

		const salt = bcrypt.genSaltSync(saltRounds);
		const passswordHasing = bcrypt.hashSync(password, salt);

		if (!!name && !!email && !!password) {
			await prisma.user.create({
				data: {
					email,
					name,
					password: passswordHasing,
                    role
				}
			});
		}

		return { success: true };
	},
	delete: async ({ request }: any) => {
		const formData = await request.formData();
		const id = formData.get('id');

		await prisma.post.deleteMany({
			where: {
				authorId: parseInt(id)
			}
		});

		await prisma.profile.deleteMany({
			where: {
				userId: parseInt(id)
			}
		});

		await prisma.user.delete({
			where: {
				id: parseInt(id)
			},
		});
		return { success: true };
	}
};

export const load = (async () => {
	const users = await prisma.user.findMany();

	return {
		users
	};
}) satisfies PageServerLoad;
