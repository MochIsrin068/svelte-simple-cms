<script>
	import { fns, AppShell, Navbar, Header, Aside, Footer, ShellSection } from '@svelteuidev/core';


    $: opened = true
</script>

<AppShell
	fixed
	navbarOffsetBreakpoint="sm"
	asideOffsetBreakpoint="sm"
>
	<Navbar slot="navbar" hidden={!opened} fixed>
        <h1>Sidebar</h1>
		<!-- <NavbarContent /> -->


	</Navbar>

	<Header fixed slot="header"
        height={70}
    >
        <h1>Header</h1>
		<!-- <HeaderContent /> -->
	</Header>

	<!-- Main content uses the default slot, so no need to explicitly declare it -->
	<ShellSection grow>
        <h1>Main COntent</h1>
		<!-- <MainContent /> -->
	</ShellSection>

	<Aside slot="aside">
        <h1>Aside</h1>
		<!-- <AsideContent /> -->
	</Aside>

	<Footer slot="footer" height={60}>
        <h1>Footer</h1>
		<!-- <FooterContent /> -->
	</Footer>
</AppShell>