<script lang="ts">
	import { Badge, Button, Divider, Image } from '@svelteuidev/core';

    export let data;
</script>

<div class="flex flex-col gap-3">
	<div class="p-3 bg-white w-full">
		<h1 class="font-bold text-black text-3xl">Profile</h1>
	</div>

	<div class="p-3 bg-white w-full flex flex-col gap-4">
		<div class="flex items-center gap-4">
			<Image
				usePlaceholder
				radius={70}
				width={70}
				height={70}
				src={null}
				alt="With default placeholder"
			/>
			<div class="flex flex-col gap-2">
				<div class="flex gap-3">
					<h2 class="font-bold text-black">{data.profile?.user.name}</h2>
					<Badge color={'green'} variant="filled" size="sm">{data.profile?.user.role}</Badge>
				</div>
				<p class="text-slate-950 text-base">{data.profile?.user.email}</p>
			</div>
		</div>
		<Divider />

		<h1 class="font-bold text-black text-3xl">Bio :</h1>
		<p class="text-slate-950">
			{data.profile?.bio}
		</p>

        <Divider />

        <Button>Update Profile</Button>
	</div>
</div>
