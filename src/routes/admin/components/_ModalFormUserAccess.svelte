<script lang="ts">
	import { Button, Modal, NativeSelect, TextInput } from "@svelteuidev/core";

    export let data = {
        isOpenModal: false,
        onCloseModal: () => {},
        onSubmitModal: ({email, name, password, role}: {
            email: string, name: string, password: string, role: string
        }) => {}
    }

    let email = '';
    let name = '';
    let password = ''
    let role = ''
	const onSubmitModal = () => data.onSubmitModal({
        email,
        name,
        password,
        role
    });
</script>

<Modal
	opened={data.isOpenModal}
	centered
	on:close={data.onCloseModal}
	title="Create New User"
	size="lg"
	overlayColor={'#b7b7b7'}
	overlayOpacity={0.55}
	overlayBlur={3}
>
	<div class="flex flex-col gap-5">
		<TextInput placeholder="Email" variant="filled" radius="md" size="lg" bind:value={email} />
		<TextInput placeholder="Name" variant="filled" radius="md" size="lg" bind:value={name} />
		<TextInput placeholder="Password" variant="filled" radius="md" size="lg" bind:value={password} />
        <NativeSelect 
            data={['ADMIN', 'USER']} 
            placeholder="Role"
            label="Select role"
            description=""
            bind:value={role}
        />
		<div class="flex items-center justify-end gap-3">
			<Button on:click={onSubmitModal} size="md">Save</Button>
		</div>
	</div>
</Modal>

