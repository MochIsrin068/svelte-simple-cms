<script lang="ts">
	import { Button, Modal, TextInput } from '@svelteuidev/core';

	export let data = {
		isOpenModal: false,
		onCloseModal: () => {},
		onSubmitModal: (value: string) => {}
	};

	let value = '';
	const onSubmitModal = () => data.onSubmitModal(value);
</script>

<Modal
	opened={data.isOpenModal}
	centered
	on:close={data.onCloseModal}
	title="Create New Category"
	size="lg"
	overlayColor={'#b7b7b7'}
	overlayOpacity={0.55}
	overlayBlur={3}
>
	<div class="flex flex-col gap-5">
		<TextInput placeholder="Category Name" variant="filled" radius="md" size="lg" bind:value />
		<div class="flex items-center justify-end gap-3">
			<Button on:click={onSubmitModal} size="md">Save Category</Button>
		</div>
	</div>
</Modal>
