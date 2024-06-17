<script lang="ts">
	import { Center, PasswordInput, TextInput, Container, Button } from '@svelteuidev/core';
    import { LockClosed } from 'radix-icons-svelte';
	export let data;
</script>

<div class="w-full container-center flex items-center justify-center">
	<Container class="bg-gray-800 rounded-md py-12 px-10 flex flex-col gap-7 w-1/2">
		<TextInput placeholder="Your name" label="Full name" radius="md" size="md" />
		<PasswordInput
			label="Password"
			placeholder="Enter password"
			icon={LockClosed}
			radius="md"
			size="md"
		/>
        <a
            href="/admin/blog"
        >
            <Button class="w-full" size="md">Login</Button>
        </a>
	</Container>
</div>

<style>
	.container-center {
		height: calc(100vh - 200px) !important;
	}
</style>
