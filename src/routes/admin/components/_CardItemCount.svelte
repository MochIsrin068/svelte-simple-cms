<script>
    export let color = "bg-amber-300"
    export let title
    export let count = 0
</script>

<div class={`rounded-md shadow-lg p-9 ${color}`}>
    <h3 class="text-white font-extrabold text-xl">{title}</h3>
    <h1 class="text-white font-extrabold text-4xl mt-3">{count}</h1>
</div>