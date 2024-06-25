<script>
	import { Badge, Button, Image, Menu, ThemeIcon } from '@svelteuidev/core';
	import CardItemBlog from '../components/_CardItemBlog.svelte';
	import { DotsVertical, EyeOpen, Pencil1, Pencil2, Trash } from 'radix-icons-svelte';
	const blogs = [
		{
			title: 'How connect postgres sql',
			image:
				'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
			status: 'post',
			summary:
				'With Portugal Porto Adventures you can explore more of the beautiful portuguese cities, by walking on food, meeting the locals and eat excellent food and wine',
			onDelete: () => {},
			onPreview: () => {},
			onEdit: () => {}
		},
		{
			title: 'How connect postgres sql',
			image:
				'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
			status: 'post',
			summary:
				'With Portugal Porto Adventures you can explore more of the beautiful portuguese cities, by walking on food, meeting the locals and eat excellent food and wine',
			onDelete: () => {},
			onPreview: () => {},
			onEdit: () => {}
		},
		{
			title: 'How connect postgres sql',
			image:
				'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
			status: 'draft',
			summary:
				'With Portugal Porto Adventures you can explore more of the beautiful portuguese cities, by walking on food, meeting the locals and eat excellent food and wine',
			onDelete: () => {},
			onPreview: () => {},
			onEdit: () => {}
		},
		{
			title: 'How connect postgres sql',
			image:
				'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
			status: 'draft',
			summary:
				'With Portugal Porto Adventures you can explore more of the beautiful portuguese cities, by walking on food, meeting the locals and eat excellent food and wine',
			onDelete: () => {},
			onPreview: () => {},
			onEdit: () => {}
		},
		{
			title: 'How connect postgres sql',
			image:
				'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
			status: 'draft',
			summary:
				'With Portugal Porto Adventures you can explore more of the beautiful portuguese cities, by walking on food, meeting the locals and eat excellent food and wine',
			onDelete: () => {},
			onPreview: () => {},
			onEdit: () => {}
		}
	];
</script>

<div class="flex justify-between mb-4">
	<h1 class="text-xl text-slate-700 font-bold">List Post</h1>
	<Button>+ Add new post</Button>
</div>
<div class="rounded-md bg-white p-3 lg:p-5 text-black overflow-x-auto">
	<table width="100%">
		<thead>
			<th>No.</th>
			<th>Title</th>
			<th>Summary</th>
			<th>Status</th>
			<th>Action</th>
		</thead>
		<tbody>
			{#each blogs as blog, index (index)}
				<tr>
					<td class="text-center">{index + 1}</td>
					<td>{blog.title}</td>
					<td><p class="line-clamp-3">{blog.summary}</p></td>
					<td class="text-center">
						<Badge color={blog.status === 'draft' ? 'red' : 'green'} variant="filled" size="xs">
							{blog.status}
						</Badge>
					</td>
					<td class="text-center">
						<Menu>
							<ThemeIcon slot="control" variant="subtle" color="gray">
								<DotsVertical class="text-slate-950" />
							</ThemeIcon>
							<Menu.Item icon={EyeOpen}>View</Menu.Item>
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

<!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
	{#each blogs as blog, index (index)}
		<CardItemBlog data={{ ...blog }} />
	{/each}
</div> -->

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

	td{
		color: #5e5e5e;
	}

	table,
	th,
	td {
		border: 2px solid #eaeaea;
	}

	th:nth-child(1),
	th:last-child {
		width: 60px;
	}
</style>
