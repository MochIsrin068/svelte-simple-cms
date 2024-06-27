<script lang="ts">
	// @ts-nocheck

	import '../app.css';
	import { SvelteUIProvider, colorScheme, createStyles } from '@svelteuidev/core';
	import { Icon, Sun, Moon } from 'svelte-hero-icons';
	import { fly, slide } from 'svelte/transition';

	export let data;

	$: theme =
		typeof window !== 'undefined'
			? window?.localStorage?.getItem('themeSchema') || 'light'
			: 'light';
	$: iconToggle = theme === 'light' ? Moon : Sun;

	function toggleTheme() {
		if (typeof window !== 'undefined') {
			const newTheme = theme == 'light' ? 'dark' : 'light';
			window?.localStorage.setItem('themeSchema', newTheme);
			theme = newTheme;
			colorScheme.update((v) => newTheme || 'light');
		}
	}

	const useStyles = createStyles(() => {
		return {
			containerBody: {
				height: 'calc(100vh - 120px)'
			}
		};
	});
	$: ({ classes, getStyles } = useStyles());

	$: isNotEligbleShowMainLayout =
		data.pathname.includes('/auth') || data.pathname.includes('/admin');
</script>

<main>
	<SvelteUIProvider withGlobalStyles themeObserver={theme}>
		<div class="w-full h-screen py-5 flex justify-center">
			<div class="w-full h-full">
				<!-- Header -->
				{#if !isNotEligbleShowMainLayout}
					<header class="flex justify-between sticky top-0 px-4 lg:px-4 xl:px-96 pb-4">
						<a href="/">
							<h3 class="font-bold text-base lg:text-xl" in:fly={{ y: 20 }} out:slide>{'<BLOG.DEV/>'}</h3>
						</a>
						<div class="flex items-center justify-end gap-5 text-sm lg:text-base">
							<a class="link" href="/auth/login">Login</a>
							<a
								class="link"
								href="https://www.github.com/MochIsrin068"
								target="_blank"
								referrerpolicy="no-referrer">Source Code</a
							>
							<button on:click={toggleTheme} in:fly={{ y: 20 }} out:slide>
								<Icon solid src={iconToggle} class="w-4 h-4 lg:w-5 lg:h-5" />
							</button>
						</div>
					</header>
				{/if}

				<div class={`px-4 lg:px-4 xl:px-96 overflow-y-auto ${classes.containerBody}`}>
					<section class="py-5 lg:pr-4">
						<slot />
					</section>
				</div>
				<!-- Footer -->
				{#if !isNotEligbleShowMainLayout}
					<footer
						class="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center w-full px-4 lg:px-4 xl:px-96"
					>
						<h4 class="text-sm lg:text-base">&copy; Rindev.labs 2024</h4>
					</footer>
				{/if}
			</div>
		</div>
	</SvelteUIProvider>
</main>
