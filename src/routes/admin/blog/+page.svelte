<script>
	import { cssvariable } from '@svelteuidev/composables';
	import {
		fns,
		AppShell,
		Navbar,
		Header,
		Aside,
		Footer,
		ShellSection,
		ThemeIcon,
		ActionIcon,
		Button,
		Image,

		Menu,

		Divider


	} from '@svelteuidev/core';
	import {
		HamburgerMenu,
		Cross2,
		ChevronLeft,
		ChevronRight,
		GithubLogo,
		Exit,

		Person,

		ChatBubble,

		Gear



	} from 'radix-icons-svelte';
	import { fade, fly, slide } from 'svelte/transition';

	$: opened = true;

	$: toggleSidebar = () => {
		opened = !opened;
	};

	$: position = opened ? 'unset' : 'absolute';
	$: heightContentWrapper = opened ? '100%' : 'calc(100% - 86px)';
</script>

<AppShell fixed navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm">
	<Navbar
		class="!bg-slate-400 !h-full"
		hidden={!opened}
		width={{
			// When viewport is larger than theme.breakpoints.sm, Navbar width will be 300px
			xs: 150,
			sm: 200,

			md: 250,

			// When viewport is larger than theme.breakpoints.lg, Navbar width will be 400px
			lg: opened ? 300 : 0,

			// When other breakpoints do not match base width is used, defaults to 100%
			// Mobile first
			base: 60
		}}
	>
		<!-- <ShellSection grow>Grow section</ShellSection> -->
		{#if opened}
			<div class="w-full h-full bg-slate-700 p-2 flex flex-col gap-3" transition:fade>
				<Button variant="subtle" compact>
					<GithubLogo slot="leftIcon" />
					Blog
				</Button>
				<Button variant="subtle" compact>
					<GithubLogo slot="leftIcon" />
					Category
				</Button>
				<Button variant="subtle" compact>
					<GithubLogo slot="leftIcon" />
					User Access
				</Button>
			</div>
		{/if}
	</Navbar>

	<Header
		fixed
		slot="header"
		height={70}
		class="!bg-slate-200 flex items-center gap-3 px-4 justify-between"
	>
		<ActionIcon
			class="cursor-pointer"
			variant="white"
			radius="lg"
			size="lg"
			on:click={toggleSidebar}
		>
			{#if opened}
				<div>
					<ChevronLeft />
				</div>
			{:else}
				<div>
					<ChevronRight />
				</div>
			{/if}
		</ActionIcon>
		<h1>{'<Blog.dev />'}</h1>

		<Menu>
			<ActionIcon variant="white" class="rounded-full" slot="control">
				<Person />
			</ActionIcon>
			<Menu.Item icon={Gear}>Profile</Menu.Item>

			<Divider />
			<a href="/auth/login">
				<Menu.Item icon={Exit}>Logout</Menu.Item>
			</a>
		</Menu>
		<!-- <HeaderContent /> -->
	</Header>

	<!-- Main content uses the default slot, so no need to explicitly declare it -->
	<!-- <ShellSection grow class="w-full"> -->
	<div
		class={`w-full bg-slate-600 left-0 right-0 content-container`}
		use:cssvariable={{ position, heightContentWrapper }}
	>
		<h1>Main COntent</h1>
	</div>
	<!-- <MainContent /> -->
	<!-- </ShellSection> -->
</AppShell>

<style>
	/* your styles go here */
	.content-container {
		height: var(--heightContentWrapper);
		position: var(--position);
	}
</style>
