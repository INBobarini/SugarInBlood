<script>
    export let rows
    export let selectedRows
    export let favorites

    function pushFromTable(event){
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

    function pushFavoriteToList(event){
        let newFood = favorites[this.id*1]
        if (selectedRows.includes(newFood)){
            return
        }
        else {
            selectedRows = [...selectedRows, newFood ]
        }
    }
    function removeFromFavorites(event){
        event.preventDefault()
        let removedFood = favorites[this.id*1]
        favorites = favorites.filter(food => food !== removedFood)
    }

    function saveToFavorites(event){
        event.stopPropagation()
        let newFood = rows[this.id*1]
        if (favorites.includes(newFood)){
            return
        }
        else {
            favorites = [...favorites, newFood ]
        }
        console.log(favorites)
    }
</script>
    
<div class = "favorites grid grid-cols-10 gap-2">
    {#each favorites as favFood, i}
        <button id={i} on:click={pushFavoriteToList} on:contextmenu = {removeFromFavorites}>
            <img src={favFood.photo} alt={favFood.name} class="w-full h-full object-cover" >
        </button>
        
    {/each}
</div>


<thead id = 'food-table-head '>
    <tr>
        <th class='w-1/12 text-center '></th>
        <th class='w-4/12 text-center'>Name</th>
        <th class='w-1/12 text-center'>GI</th>
        <th class='w-1/12 text-center'>GL</th>
        <th class='w-1/12 text-center'>kcal</th>
        <th class='w-1/12 text-center'>Carbs</th>
        <th class='w-1/12 text-center'>Proteins</th>
        <th class='w-1/12 text-center'>Fats</th>
    </tr>
</thead>
{#each rows as food , i}
    <tr class = 'row group' id={i} on:click={pushFromTable}>
        <td class= "w-1/12 group-hover:bg-fat-dark"><img class = " object-cover" loading = "lazy" decoding ="async" src= {food.photo} alt="{food.name}"></td>
        <td id="food-name" class="w-4/12 h-full border group-hover:bg-fat-dark">
            <span class="flex-grow ml-2">{food.name}</span>
            {#if !favorites.some(fav=>fav.name===food.name)||!favorites.length}
                <button class="text-fat-light" id={i} on:click={saveToFavorites}> ★ </button> 
            {:else}
            <span class="">★</span>
            {/if}
        </td>
        <td class= "w-1/12 text-center align-middle group-hover:bg-fat-dark">{food.GI}</td>
        <td class= "w-1/12 text-center align-middle group-hover:bg-fat-dark">{food.GL}</td>
        <td class= "w-1/12 text-center align-middle group-hover:bg-fat-dark">{food.calories}</td>
        <td class= "w-1/12 text-center align-middle group-hover:bg-fat-dark">{food.carbohydrates}</td>
        <td class= "w-1/12 text-center align-middle group-hover:bg-fat-dark">{food.proteins}</td>
        <td class= "w-1/12 text-center align-middle group-hover:bg-fat-dark">{food.fats}</td>
    </tr>
{/each}

<style>
td,th{
    border: 0.1em solid #402218;
}
</style>

