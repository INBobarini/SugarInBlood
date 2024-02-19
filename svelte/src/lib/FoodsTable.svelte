<script>
    export let rows
    export let selectedRows

    function pushFood(event){
        let newFood = rows[this.id*1]
        if (!selectedRows.length){
            selectedRows = [newFood]
            return
        }
        else if (selectedRows.includes(newFood)){
            return
        }
        else {
            selectedRows = [...selectedRows, newFood ]
        }
    }
</script>
    
<thead>
    <tr class="text-green-200">
        <th colspan="2">Name</th>
        <th>GI</th>
        <th>GL</th>
        <th>kcal</th>
        <th>carbohydrates</th>
        <th>proteins</th>
        <th>fats</th>
    </tr>
</thead>
{#each rows as food , i}
<tr>
    <td ><img loading = "lazy" decoding ="async" src= {food.photo} alt="{food.name}"></td>
    <td id="food-name">{food.name}</td>
    <td>{food.GI}</td>
    <td>{food.GL}</td>
    <td>{food.calories}</td>
    <td>{food.carbohydrates}</td>
    <td>{food.proteins}</td>
    <td>{food.fats}</td>
    <td><button id={i} on:click={pushFood}>+</button></td>
</tr>
{/each}

<style>

</style>