<script>
    export let rows
    export let filteredRows
    
    let selectedLetter='A'
    
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    $: filteredRows = rows.filter((row)=>row.name[0]===selectedLetter)
</script>
<div id='alphabet'>
    {#each alphabet as letter}
    <button class='' on:click={()=> selectedLetter=letter}>{letter}</button>
    {/each}
</div>

<style>
    #alphabet{  
        @media (max-width: 1024px) { 
            display: none; 
    }
}
</style>


    