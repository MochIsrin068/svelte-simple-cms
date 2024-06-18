<script lang="ts">
	import { Icon, Share } from 'svelte-hero-icons';
	import { formatDate } from '$lib/helper/date';
	import type { PageData } from './$types';
	import { Image, Menu, Notification, Seo, colorScheme } from '@svelteuidev/core';
	import { clipboard, useViewportSize } from '@svelteuidev/composables';
	import { fly } from 'svelte/transition';
	import { Copy, EnvelopeOpen, InstagramLogo } from 'radix-icons-svelte';
	import { extractTextWithoutImg } from '$lib/content';

	export let data: PageData;

	const viewport = useViewportSize();
	let themeSchema = 'light';
	const greetingMessage = 'Check out this link:';
	let currentUrl = data.currentUrl.replaceAll(' ', '%2');
	let textToCopy = currentUrl;
	let copied = false;
	let onCopy = () => {
		copied = true;
		setTimeout(function () {
			copied = false;
		}, 1000);
	};

	colorScheme.subscribe((v) => {
		themeSchema = v;
	});

	function shareToWhatsApp() {
		const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(greetingMessage)}%20${encodeURIComponent(currentUrl)}`;
		window.open(whatsappUrl, '_blank');
	}

	$: ({ width } = $viewport);
	$: isMobileSize = width <= 640;
	$: categoryTags = data.detailBlog?.categories.map((c) => c.name) || [];
	$: metaDescriptionValue =
		typeof window !== 'undefined'
			? extractTextWithoutImg(data.detailBlog?.content || '')
			: data.detailBlog?.content;
</script>

<Seo
	title={data.detailBlog?.title}
	titleTemplate={`%t% | by ${data.detailBlog?.author.name} | ${formatDate(data.detailBlog?.createdAt)} | Blog.Dev | Rindev Labs`}
	description={metaDescriptionValue}
	canonical={currentUrl}
	openGraph={{
		title: data.detailBlog?.title,
		description: metaDescriptionValue,
		url: currentUrl,
		type: 'article',
		images: [
			{			
				url: data.detailBlog?.image,
				alt: data.detailBlog?.title,
			}
		],
		book: {
			authors: [data.detailBlog?.author.name],
			releaseDate: data.detailBlog?.createdAt,
			tags: categoryTags
		},
		article: {
			authors: [data.detailBlog?.author.name],
			publishedTime: data.detailBlog?.createdAt,
			tags: categoryTags,
			modifiedTime: data.detailBlog?.updatedAt
		}
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: data.detailBlog?.title,
		description: metaDescriptionValue,
		image: data.detailBlog?.image,
		imageAlt: data.detailBlog?.title
	}}
/>

<div class="flex flex-col gap-4">
	<h1 class="font-bold text-4xl lg:text-6xl leading-tight" in:fly={{ y: 20 }}>
		{data.detailBlog?.title}
	</h1>
	<span class="text-gray-400"
		>By <u>{data.detailBlog?.author.name}</u> on {formatDate(data.detailBlog?.createdAt)}</span
	>
	<div class="relative">
		<Image
			src={data.detailBlog?.image}
			alt={data.detailBlog?.title}
			fit="cover"
			radius="md"
			height={isMobileSize ? 300 : 500}
			class="shadow-lg"
		/>
		<div class="flex items-center absolute bottom-3 right-3">
			<Menu class="p-0">
				<div slot="control" class="flex items-center justify-center bg-slate-100 rounded-full p-2">
					<Icon src={Share} class="w-4 h-4" />
				</div>
				<Menu.Item use={[[clipboard, textToCopy]]} on:useclipboard={onCopy} icon={Copy}
					>Salin</Menu.Item
				>
				<Menu.Item icon={EnvelopeOpen} on:click={shareToWhatsApp}>Whatsapp</Menu.Item>
			</Menu>
		</div>
	</div>
	<div class={`prose ${themeSchema === 'dark' ? 'prose-invert' : ''} max-w-full`}>
		{@html data.detailBlog?.content}
	</div>
</div>

{#if copied}
	<div class="absolute top-3 left-0 right-0 flex items-center justify-center">
		<Notification title="Succes Copy URL.">URL Blog succesfully copied into clipboard.</Notification
		>
	</div>
{/if}
