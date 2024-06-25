<script>
	import { goto, preloadData, pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import { cssvariable, useViewportSize } from '@svelteuidev/composables';
	import {
		AppShell,
		Navbar,
		Header,
		ShellSection,
		ActionIcon,
		Button,
		Menu,
		Divider,
		createStyles,
		Seo,
		key
	} from '@svelteuidev/core';
	import {
		ChevronLeft,
		ChevronRight,
		Exit,
		Person,
		Gear,
		Home,
		Backpack,
		PaperPlane
	} from 'radix-icons-svelte';
	import { fade } from 'svelte/transition';

	$: opened = true;

	$: toggleSidebar = () => {
		opened = !opened;
	};

	$: position = opened ? 'unset' : 'absolute';
	$: heightContentWrapper = opened ? '100%' : 'calc(100% - 86px)';

	const viewport = useViewportSize();
	$: ({ width } = $viewport);
	$: isMobileSize = width <= 640;

	$: useStyles = createStyles(() => {
		return {
			contentContainer: {
				height: heightContentWrapper,
				position: width > 1279 ? 'absolute' : position,
				left: width > 1279 ? (opened ? '300px' : '0') : '0',
				padding: !opened || width > 1279 ? 24 : 'auto'
			}
		};
	});
	$: ({ classes, getStyles } = useStyles());

	export let data;

	// @ts-ignore
	$: currentState = $page.state.selected;

	$: currentPath = currentState
		? currentState.pathname === '/admin'
			? 'home'
			: currentState.pathname.split('/')[2]
		: data.isActivePageKey;

	const menus = [
		{
			key: 'home',
			label: 'Home',
			url: '/admin'
		},
		{
			key: 'blog',
			label: 'Blog',
			url: '/admin/blog'
		},
		{
			key: 'category',
			label: 'Category',
			url: '/admin/category'
		},
		{
			key: 'user-access',
			label: 'User Access',
			url: '/admin/user-access'
		}
	];
</script>

<Seo
	title="Blog.Dev"
	titleTemplate="%t% | Rindev Labs | Admin"
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

<div class="bg-slate-100 absolute left-0 right-0 top-0 bottom-0 overflow-y-auto">
	<AppShell fixed navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm">
		<Navbar
			class="!bg-gray-900 !h-full !border-slate-100"
			hidden={!opened}
			width={{
				// When viewport is larger than theme.breakpoints.sm, Navbar width will be 300px
				xs: 150,
				sm: 200,

				md: opened ? 250 : 0,

				// When viewport is larger than theme.breakpoints.lg, Navbar width will be 400px
				lg: opened ? 300 : 0,
				xl: opened ? 300 : 0,

				// When other breakpoints do not match base width is used, defaults to 100%
				// Mobile first
				base: 50
			}}
		>
			<!-- <ShellSection grow>Grow section</ShellSection> -->
			{#if opened}
				<div class="w-full h-full shadow-xl lg:px-4 py-8 flex flex-col gap-5" transition:fade>
					{#each menus as menu (menu.key)}
						<a
							href={menu.url}
							on:click={async (e) => {
								e.preventDefault();
								const { href } = e.currentTarget;
								const result = await preloadData(href);

								if (result.type === 'loaded' && result.status === 200) {
									pushState(href, { selected: result.data });
									goto(href, {
										state: {
											selected: result.data
										}
									});
								} else {
									goto(href);
								}
							}}
						>
							<Button
								variant={currentPath === menu.key ? 'filled' : 'subtle'}
								class="w-full flex justify-start text-sm gap-2"
								color={currentPath === menu.key ? '#1f293d' : '#dadada'}
							>
								{#if menu.key === 'home'}
									<Home slot="leftIcon" size={14} />
								{:else if menu.key === 'blog'}
									<PaperPlane slot="leftIcon" size={14} />
								{:else if menu.key === 'category'}
									<Backpack slot="leftIcon" size={14} />
								{:else}
									<Person slot="leftIcon" size={14} />
								{/if}
								{#if !isMobileSize}
									{menu.label}
								{/if}
							</Button>
						</a>
					{/each}
				</div>
			{/if}
		</Navbar>

		<Header
			fixed
			slot="header"
			height={70}
			class="!bg-white flex items-center gap-3 px-4 justify-between !border-slate-100 !shadow-sm"
		>
			<ActionIcon
				class="cursor-pointer shadow-xl"
				variant="white"
				radius="lg"
				size="lg"
				on:click={toggleSidebar}
			>
				{#if opened}
					<div>
						<ChevronLeft size={18} />
					</div>
				{:else}
					<div>
						<ChevronRight size={18} />
					</div>
				{/if}
			</ActionIcon>
			<h1 class="font-bold text-slate-700 text-xl">{'{ <Blog.dev /> }'}</h1>

			<Menu>
				<ActionIcon variant="white" class="rounded-full bg-slate-200" slot="control">
					<Person />
				</ActionIcon>
				<a href="/admin/profile">
					<Menu.Item icon={Gear}>Profile</Menu.Item>
				</a>

				<Divider />
				<a href="/auth/login">
					<Menu.Item icon={Exit}>Logout</Menu.Item>
				</a>
			</Menu>
		</Header>

		<ShellSection grow class="w-ful">
			<div
				class={`right-0 top-[6vh] ${classes.contentContainer}`}
				use:cssvariable={{ position, heightContentWrapper }}
			>
				<slot />
			</div>
		</ShellSection>
	</AppShell>
</div>
