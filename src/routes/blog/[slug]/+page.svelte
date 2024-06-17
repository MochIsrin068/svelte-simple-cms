<script lang="ts">
	import { Icon, Share } from 'svelte-hero-icons';
	import { formatDate } from '$lib/helper/date';
	import type { PageData } from './$types';
	import { Image, Menu, Notification, colorScheme } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/composables';
	import { fly, slide } from 'svelte/transition';

	export let data: PageData;

	let textToCopy = data.currentUrl;
	let copied = false;
	let onCopy = () => {
		copied = true;
		setTimeout(function () {
			copied = false;
		}, 1000);
	};

	let themeSchema = 'light';

	colorScheme.subscribe((v) => {
		themeSchema = v;
	});
</script>

<div class="flex flex-col gap-4">
	<h1 class="font-bold text-6xl leading-tight" in:fly={{ y: 20 }} out:slide>
		{data.detailBlog?.title}
	</h1>
	<span class="text-gray-400">By <u>{data.detailBlog?.author.name}</u> on {formatDate(data.detailBlog?.createdAt)}</span>
	<div class="relative">
		<Image
			src={data.detailBlog?.image}
			alt="higlight-blog-image"
			fit="cover"
			radius="md"
			height={500}
			class="shadow-lg"
		/>
		<div class="flex items-center absolute bottom-3 right-3">
			<Menu>
				<div slot="control" class="flex items-center justify-center bg-slate-100 rounded-full p-2">
					<Icon src={Share} class="w-4 h-4" />
				</div>
				<Menu.Item use={[[clipboard, textToCopy]]} on:useclipboard={onCopy}>Salin</Menu.Item>
				<Menu.Item>Whatsapp</Menu.Item>
				<Menu.Item>Instagram</Menu.Item>
			</Menu>
		</div>
	</div>
	<div class={`prose ${themeSchema === 'dark' ? 'prose-invert' : ''}`}>
		{@html data.detailBlog?.content}
	</div>
</div>

{#if copied}
	<div class="absolute top-3 left-0 right-0 flex items-center justify-center">
		<Notification title="Succes Copy URL.">URL Blog succesfully copied into clipboard.</Notification
		>
	</div>
{/if}
