<script>
    export let rows
    export let filteredRows
    let stringFragment = ''
    
    $: filteredRows = rows.filter(
        (row)=>row.name.toLowerCase().includes(stringFragment.toLowerCase())
        ).sort((a, b) => a.name.localeCompare(b.name));

</script>
<div class="query flex flex-row justify-end">
    <span class= " flex items-center" >Search </span>
    <input class=" flex items-center w-1/4 h-8 rounded"type="text" bind:value = {stringFragment}>
</div>