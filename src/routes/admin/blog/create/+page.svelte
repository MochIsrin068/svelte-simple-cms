<script lang="ts">
	import { Button, Input } from '@svelteuidev/core';
	import Editor from '@tinymce/tinymce-svelte';
	import { env } from '$env/dynamic/public';
	import { ArrowLeft } from 'radix-icons-svelte';

	let value = '';
</script>

<div class="flex items-center mb-4 gap-3">
	<a class="flex items-center cursor-pointer" href="/admin/blog">
		<ArrowLeft class="text-black" size={22} />
	</a>
	<h1 class="text-xl text-slate-700 font-bold">Create New Blog</h1>
</div>

<div class="rounded-md bg-white p-3 lg:p-5 text-black overflow-x-auto">
	<form method="POST" action="?/publish" class="flex flex-col gap-3">
		<div class="flex flex-col gap-2">
			<h3>Title Blog</h3>
			<Input
				placeholder="Write here the information"
				class="!bg-white !border-[#ddd] !text-gray-700"
				name="title"
				on:bind:
			/>
		</div>

		<div class="flex flex-col gap-2">
			<h3>Content</h3>
			<Editor bind:value apiKey={env.PUBLIC_TINY_API_CLOUD_API_KEY} />
			<textarea bind:value hidden name="content"></textarea>
		</div>

		<div class="flex justify-end items-center gap-3 mt-4">
			<Button variant="default" formaction="?/draft" value>+ Save as Draft</Button>
			<Button formaction="?/publish">+ Publish</Button>
		</div>
	</form>
</div>
