<script lang="ts">
	import { extractTextWithoutImg } from '$lib/content';
	import { formatDate } from '$lib/helper/date';
	import { Badge, Button, Menu, ThemeIcon } from '@svelteuidev/core';
	import { DotsVertical, EyeOpen, Pencil2, Trash } from 'radix-icons-svelte';

	export let data;
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
			<th>Last Updated</th>
			<th>Status</th>
			<th>Action</th>
		</thead>
		<tbody>
			{#each data.posts as post, index (index)}
				<tr>
					<td class="text-center">{index + 1}</td>
					<td>{post.title}</td>
					<td><p class="line-clamp-3">
						{@html typeof window !== "undefined" ? extractTextWithoutImg(post.content) : post.content}
					</p></td>
					<td><p class="line-clamp-3">{formatDate(`${post.updatedAt}`)}</p></td>
					<td class="text-center">
						<Badge color={!post.published ? 'red' : 'green'} variant="filled" size="xs">
							{post.published ? "Pubished" : "Draft"}
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
