<script>
    export let rows
    export let filteredRows
    let stringFragment = ''
    
    $: filteredRows = stringFragment.length < 3 ? 
    rows.slice(0,10) :  
    rows.filter((row)=>row.name.toLowerCase().includes(stringFragment.toLowerCase())
        ).sort((a, b) => a.name.localeCompare(b.name));
    
   

</script>
<div class="query flex flex-row justify-end h-8">
    <span class= " flex items-center h-full"  >Search </span>
    <input class=" flex items-center w-32 h-full" type="text" bind:value = {stringFragment}>
</div>