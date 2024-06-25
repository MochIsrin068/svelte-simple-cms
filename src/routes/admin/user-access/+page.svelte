<script>
	import { Button, Menu, ThemeIcon } from '@svelteuidev/core';
	import { DotsVertical, EyeOpen, Pencil2, Trash } from 'radix-icons-svelte';
	const users = [
		{
			id: 1,
			name: 'Rindev User',
			email: 'rindevuser@rindev.com',
			role: 'USER'
		},
		{
			id: 2,
			name: 'Rindev Admin',
			email: 'rindevadmin@rindev.com',
			role: 'ADMIN'
		}
	];
</script>

<div class="flex justify-between mb-4">
	<h1 class="text-xl text-slate-700 font-bold">List User</h1>
	<Button>+ Add new User</Button>
</div>
<div class="rounded-md bg-white p-3 lg:p-5 text-black overflow-x-auto">
	<table width="100%">
		<thead>
			<th>No.</th>
			<th>Name</th>
			<th>Email</th>
			<th>Role</th>
			<th>Action</th>
		</thead>
		<tbody>
			{#each users as user, index (user.id)}
				<tr>
					<td class="text-center">{index + 1}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.role}</td>
					<td class="text-center">
						<Menu>
							<ThemeIcon slot="control" variant="subtle" color="gray">
								<DotsVertical class="text-slate-950" />
							</ThemeIcon>
							<Menu.Item icon={Pencil2}>Edit</Menu.Item>
							<Menu.Item color="red" icon={Trash}>Delete</Menu.Item>
						</Menu>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="w-full flex items-center mt-3">
	<div class="bg-white py-2 px-4 flex items-center gap-2 rounded-md">
		<Button variant="outline" size="xs" compact>Prev</Button>
		<h3 class="text-sm font-bold text-gray-500">1</h3>
		<Button variant="outline" size="xs" compact>Next</Button>
	</div>
</div>

<style>
	table {
		border-collapse: collapse;
	}

	thead {
		background-color: #f4f4f4;
	}

	th,
	td {
		padding: 10px;
		font-size: 14px;
	}

	td {
		color: #5e5e5e;
	}

	th:nth-child(1),
	th:last-child {
		width: 60px;
	}

	table,
	th,
	td {
		border: 2px solid #eaeaea;
	}
</style>
