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
    
<thead id = 'food-table-head '>
    <tr class = 'bg-red-light '>
        <th class='w-1/12 text-center ' ></th>
        <th class='w-5/12 text-center'>Name</th>
        <th class='w-1/12 text-center'>GI</th>
        <th class='w-1/12 text-center'>GL</th>
        <th class='w-1/12 text-center'>kcal</th>
        <th class='w-1/12 text-center'>carbohydrates</th>
        <th class='w-1/12 text-center'>proteins</th>
        <th class='w-1/12 text-center'>fats</th>
    </tr>
</thead>
{#each rows as food , i}
    <tr>
        <td class= "w-1/12 text-center align-middle"><img loading = "lazy" decoding ="async" src= {food.photo} alt="{food.name}"></td>
        <td id="food-name" class="w-5/12 text-center align-middle border hover:">
            <button class="single-food rounded bg-red-light hover:bg-red " id={i} on:click={pushFood}>
                {food.name}
            </button>
        </td>
        <td class= "w-1/12 text-center align-middle">{food.GI}</td>
        <td class= "w-1/12 text-center align-middle">{food.GL}</td>
        <td class= "w-1/12 text-center align-middle">{food.calories}</td>
        <td class= "w-1/12 text-center align-middle">{food.carbohydrates}</td>
        <td class= "w-1/12 text-center align-middle">{food.proteins}</td>
        <td class= "w-1/12 text-center align-middle">{food.fats}</td>
    </tr>
{/each}

<style>
    
</style>

