<script lang="ts">
	import { cssvariable } from '@svelteuidev/composables';
	import {
		Center,
		PasswordInput,
		TextInput,
		Container,
		Button,
		colorScheme,
		Seo
	} from '@svelteuidev/core';
	import { LockClosed } from 'radix-icons-svelte';
	import type { ActionData, PageData } from './$types';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	export let data: PageData;

	let theme = 'light';
	colorScheme.subscribe((v) => (theme = v));

	$: shadowStyle = theme === 'light' ? '14px 14px 0 #ddd' : '14px 14px 0 #121111';
	
	export let form: ActionData

	onMount(() => {
		if(data.isLoggedIn || form?.isSuccess){
			goto('/admin', {replaceState: true})
		}
	})
</script>

<Seo
	title="Blog.Dev"
	titleTemplate="%t% | Rindev Labs | Login"
	description="Blog.Dev by Rindev Labs adalah website buat para developer untuk growth"
	openGraph={{
		title: 'Blog.Dev by Rindev Labs',
		description:
			'Blog.Dev by Rindev Labs adalah website buat para developer untuk growth yang di develop secara open source by MochIsrin068',
		url: data.currentUrl,
		type: 'website'
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: 'Blog.Dev by Rindev Labs',
		description: 'Blog.Dev by Rindev Labs adalah website buat para developer untuk growth'
	}}
/>

<div class="w-full container-center flex items-center justify-center px-2 lg:px-0">
	<form
		class={`form-wrapper rounded-md py-12 px-4 md:px-6 lg:px-8 xl:px-10 flex flex-col gap-7 w-full lg:w-4/6 ${theme === 'light' ? 'bg-slate-100 border-[1px] border-solid border-slate-300' : 'bg-gray-800'}`}
		use:cssvariable={{ shadowStyle }}
		method="POST"
	>
		<TextInput
			placeholder="Enter Email"
			type="email"
			label="Email Address"
			radius="md"
			size="lg"
			required
			name="email"
		/>
		<PasswordInput
			name="password"
			label="Password"
			placeholder="Enter password"
			icon={LockClosed}
			radius="md"
			size="lg"
			required
		/>
		<Button class="w-full" size="lg" type="submit">Login</Button>
	</form>
</div>

<style>
	.form-wrapper {
		box-shadow: var(--shadowStyle);
	}
	.container-center {
		height: calc(100vh - 200px) !important;
	}
</style>
