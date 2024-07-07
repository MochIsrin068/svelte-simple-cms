<script lang="ts">
	import { Button, Menu, ThemeIcon } from '@svelteuidev/core';
	import { DotsVertical, Pencil2, Trash } from 'radix-icons-svelte';
	import ModalCreateCategory from '../components/_ModalCreateCategory.svelte';
	import { invalidate, invalidateAll } from '$app/navigation';
	export let data;

	let isOpenModal = false;
	const onOpenModal = () => (isOpenModal = true);
	const onCloseModal = () => (isOpenModal = false);

    const triggerFetching = async () => {
		await invalidateAll()
    };

	const onSubmitModal = async(value: string) => {
		const form = new FormData();
        form.append('name', value);

		const response = await fetch('/admin/category?/add', {
            method: 'POST',
            body: form,
        });
		
		if (response.ok) {
            await triggerFetching();
            isOpenModal = false;
            value = '';
        } else {
            console.error('Failed to create category');
        }
	};

	const deleteCategory = async(id: number) => {
		const form = new FormData();
        form.append('id', `${id}`);

		const response = await fetch('/admin/category?/delete', {
            method: 'POST',
            body: form,
        });
		
		if (response.ok) {
            await triggerFetching();
            isOpenModal = false;
        } else {
            console.error('Failed to delete category');
        }
	};

	$: dataModalCatrgory = {
		isOpenModal,
		onCloseModal,
		onSubmitModal
	};
	
</script>

<div class="flex justify-between mb-4">
	<h1 class="text-xl text-slate-700 font-bold">List Category</h1>
	<Button on:click={onOpenModal}>+ Add new Category</Button>
</div>
<div class="rounded-md bg-white p-3 lg:p-5 text-black overflow-x-auto">
	<table width="100%">
		<thead>
			<th>No.</th>
			<th>Name</th>
			<th>Action</th>
		</thead>
		<tbody>
			{#each data.categories as category, index (category.id)}
				<tr>
					<td class="text-center">{index + 1}</td>
					<td>{category.name}</td>
					<td class="text-center">
						<Menu>
							<ThemeIcon slot="control" variant="subtle" color="gray">
								<DotsVertical class="text-slate-950" />
							</ThemeIcon>
							<Menu.Item icon={Pencil2}>Edit</Menu.Item>
							<Menu.Item color="red" icon={Trash} on:click={() => deleteCategory(category.id)}>Delete</Menu.Item>
						</Menu>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="w-full flex items-center mt-3">
	<div class="bg-white py-2 px-4 flex items-center gap-2 rounded-md">
		<Button variant="outline" size="xs" compact>Prev</Button>
		<h3 class="text-sm font-bold text-gray-500">1</h3>
		<Button variant="outline" size="xs" compact>Next</Button>
	</div>
</div>

<!-- Modal Create -->
<ModalCreateCategory data={dataModalCatrgory} />

<style>
	table {
		border-collapse: collapse;
	}

	thead {
		background-color: #f4f4f4;
	}

	th,
	td {
		padding: 10px;
		font-size: 14px;
	}

	td {
		color: #5e5e5e;
	}

	th:nth-child(1),
	th:last-child {
		width: 60px;
	}

	table,
	th,
	td {
		border: 2px solid #eaeaea;
	}
</style>
