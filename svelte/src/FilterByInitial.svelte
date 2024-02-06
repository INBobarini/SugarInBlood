<script>
    export let rows
    export let filteredRows
    export let initial
    
    $: filteredRows = rows.filter((row)=>row.name[0]===initial)

</script>

    