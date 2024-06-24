<script>
	import { Badge, Button, Card, Group, Image, Text } from '@svelteuidev/core';
	import { EyeOpen, Pencil1, Trash } from 'radix-icons-svelte';
	import {STATUS_BLOG} from '$lib/constant/status'

	export let data = {
		image:
			'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
		title: '-',
		summary: '-',
		status: 'draft',
		onPreview: () => {},
		onEdit: () => {},
		onDelete: () => {}
	};

    $: tagColor = data.status === STATUS_BLOG.draft.id ? 'red' : 'green'
</script>

<Card shadow="lg" padding="lg">
	<Card.Section first padding="lg">
		<Image src={data.image} height={160} alt={data.title} />
	</Card.Section>

	<div class="my-4 flex flex-col gap-3">
		<Group position="apart">
			<Text weight={500}>{data.title}</Text>
			<Badge color={tagColor} variant="light">
				{data.status}
			</Badge>
		</Group>

		<Text size="sm" class="leading-5">
			{data.summary}
		</Text>
	</div>

	<div class="flex gap-2">
		<Button variant="light" color="green" fullSize on:click={data.onPreview}>
			<EyeOpen slot="leftIcon" size={16} />
			Preview
		</Button>
		<Button variant="light" color="blue" fullSize on:click={data.onEdit}>
			<Pencil1 slot="leftIcon" size={16} />
			Edit
		</Button>
		<Button variant="light" color="red" on:click={data.onEdit}>
			<Trash size={20} />
		</Button>
	</div>
</Card>
