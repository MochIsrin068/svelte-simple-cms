<script>
	import CardItemCount from "./components/_CardItemCount.svelte";
    

</script>
<div class="w-full h-full">
    <div class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-6">
        <CardItemCount title="Total Status Draft" count={10}/>
        <CardItemCount title="Total Status Posted" count={10} color="bg-gradient-to-r from-sky-400 to-blue-500"/>
        <CardItemCount title="Total Category" count={10} color="bg-gradient-to-r from-rose-300 to-rose-500"/>
        <CardItemCount title="Total User" count={10} color="bg-gradient-to-r from-violet-500 to-purple-500"/>
    </div>
       
</div>