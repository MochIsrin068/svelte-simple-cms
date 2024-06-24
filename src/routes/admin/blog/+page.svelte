<script>
	import CardItemBlog from '../components/_CardItemBlog.svelte';
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

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
	{#each blogs as blog, index (index)}
		<CardItemBlog data={{ ...blog }} />
	{/each}
</div>
