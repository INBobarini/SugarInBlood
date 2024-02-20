<script>
    export let rows
    export let filteredRows
    let stringFragment = ''
    
    $: filteredRows = rows.filter(
        (row)=>row.name.toLowerCase().includes(stringFragment.toLowerCase())
        )

</script>
<input class="w-full h-8"type="text" bind:value = {stringFragment}>
