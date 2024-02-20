<script>
    export let rows
    export let filteredRows
    
    let selectedLetter='A'
    
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    $: filteredRows = rows.filter((row)=>row.name[0]===selectedLetter)
</script>
    {#each alphabet as letter}
    <button class='w-6 border bg-red-light h-8' on:click={()=> selectedLetter=letter}>{letter}</button>
    {/each}
<style>
    
</style>

    