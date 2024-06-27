<script lang="ts">
	import CardItemCount from "./components/_CardItemCount.svelte";

    export let data;
</script>
<div class="w-full h-full">
    <div class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-6">
        <CardItemCount title="Total Status Draft" count={data.totalBlogDraft}/>
        <CardItemCount title="Total Status Posted" count={data.totalBlogPublshed} color="bg-gradient-to-r from-sky-400 to-blue-500"/>
        <CardItemCount title="Total Category" count={data.totalCategory} color="bg-gradient-to-r from-rose-300 to-rose-500"/>
        <CardItemCount title="Total User" count={data.totalUser} color="bg-gradient-to-r from-violet-500 to-purple-500"/>
    </div>
       
</div>