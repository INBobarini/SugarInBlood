<script>
    export let rows
    export let filteredRows
    export let stringFragment
    
    $: filteredRows = rows.filter(
        (row)=>row.name.toLowerCase().includes(stringFragment.toLowerCase())
        )

</script>