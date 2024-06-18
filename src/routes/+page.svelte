<script lang="ts">
	import { Calendar, Icon } from 'svelte-hero-icons';
	import type { PageData } from './$types';
	import { Badge, Image, Seo } from '@svelteuidev/core';
	import { formatDate } from '$lib/helper/date';
	import { convertToPermalink } from '$lib/helper/content';
	import { useViewportSize } from '@svelteuidev/composables';
	import { fly } from 'svelte/transition';
	import {extractTextWithoutImg} from '$lib/content'

	export let data: PageData;

	const viewport = useViewportSize();
	$: ({ width } = $viewport);
	$: isMobileSize = width <= 640;
	console.log("data", data)

	let decodedUrl = '/';
	if (typeof window !== 'undefined') {
		decodedUrl = decodeURIComponent(data.currentUrl);
	}
	$: canonical = `${decodedUrl}blog/${convertToPermalink(data.highlightBlog.title)} ${data.highlightBlog.id}`.replaceAll(' ', '%20')
</script>

<Seo
	title="Blog.Dev"
	titleTemplate="%t% | Rindev Labs"
	description="Blog.Dev by Rindev Labs adalah website buat para developer untuk growth"
	canonical={canonical}
	openGraph={{
		title: "Blog.Dev by Rindev Labs",
		description: "Blog.Dev by Rindev Labs adalah website buat para developer untuk growth yang di develop secara open source by MochIsrin068",
		url: data.currentUrl,
		type: "website",
		images: [
			{
				url: data.highlightBlog.image,
				alt: data.highlightBlog.title,
			}
		]
	}}
	twitter={{
		cardType: "summary_large_image",
		title: "Blog.Dev by Rindev Labs",
		description: "Blog.Dev by Rindev Labs adalah website buat para developer untuk growth",
		image: data.highlightBlog.image,
		imageAlt: data.highlightBlog.title
	}}
/>

<a
	class="flex flex-col gap-4"
	href={`/blog/${convertToPermalink(data.highlightBlog.title)} ${data.highlightBlog.id}`}
>
	<div class="flex items-center gap-4 text-xs lg:text-sm">
		<span>{formatDate(data.highlightBlog.createdAt)}</span>
		<div class="w-2 h-2 bg-red-700 rounded-full"></div>
		<span class="gap-2">
			{#each data.highlightBlog.categories as category (category.id)}
				{category.name}
			{/each}
		</span>
	</div>
	<h1 class="font-extrabold text-4xl lg:text-6xl leading-tight" in:fly={{ y: 20 }}>
		{data.highlightBlog.title}
	</h1>
	<Image
		src={data.highlightBlog.image}
		alt={data.highlightBlog.title}
		fit="cover"
		radius="md"
		height={isMobileSize ? 300 : 500}
		class="shadow-lg hover:shadow-none"
	/>
</a>

<div class="mt-7">
	<h3 class="font-bold text-xl">More articles</h3>
	<div class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
		{#each data.blogs as blog (blog.id)}
			<a
				class="relative hover:shadow-md rounded-md"
				href={`/blog/${convertToPermalink(blog.title)} ${blog.id}`}
			>
				<Image
					src={blog.image}
					alt={blog.title}
					fit="cover"
					radius="md"
					height={isMobileSize ? 160 : 300}
					class="shadow-lg"
				/>
				<div class="absolute top-3 left-3 shadow-sm flex gap-2">
					{#each blog.categories as category (category.id)}
						<Badge variant="gradient" color="indigo" size="xs" radius="sm">{category.name}</Badge>
					{/each}
				</div>
				<div
					class="flex items-center gap-2 absolute top-3 right-3 bg-slate-50 px-2 py-1 rounded-lg shadow-sm text-sm"
				>
					<Icon solid src={Calendar} class="w-4 h-4" />
					<span>{formatDate(blog.createdAt)}</span>
				</div>
				<div class="flex flex-col gap-3 p-2 lg:p-4">
					<h2 class="font-bold text-xl lg:text-3xl">{blog.title}</h2>
					<div class="text-gray-500 leading-relaxed truncate-data text-sm lg:text-base">
						{@html typeof window !== "undefined" ? extractTextWithoutImg(blog.content) : blog.content}
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.truncate-data {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		max-height: 4.5em;
	}
</style>
