<script lang="ts">
	import { cssvariable } from '@svelteuidev/composables';
	import { Center, PasswordInput, TextInput, Container, Button, colorScheme } from '@svelteuidev/core';
    import { LockClosed } from 'radix-icons-svelte';
	export let data;

	let theme = "light"
	colorScheme.subscribe((v) => theme = v)

	$: shadowStyle = theme === "light" ? "14px 14px 0 #ddd" : "14px 14px 0 #121111"
</script>

<div class="w-full container-center flex items-center justify-center px-2 lg:px-0">
	<div class={`form-wrapper rounded-md py-12 px-4 md:px-6 lg:px-8 xl:px-10 flex flex-col gap-7 w-full lg:w-4/6 ${theme === "light" ? "bg-slate-100 border-[1px] border-solid border-slate-300" : "bg-gray-800"}`} use:cssvariable={{shadowStyle}}>
		<TextInput placeholder="Enter Email" type="email" label="Email Address" radius="md" size="lg"  required/>
		<PasswordInput
			label="Password"
			placeholder="Enter password"
			icon={LockClosed}
			radius="md"
			size="lg"
			required
		/>
        <a
            href="/admin/blog"
			class="mt-3"
        >
            <Button class="w-full" size="lg">Login</Button>
        </a>
	</div>
</div>


<style>
	.form-wrapper { 	
		box-shadow:  var(--shadowStyle);
	}
	.container-center {
		height: calc(100vh - 200px) !important;
	}
</style>
