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
    }
</script>
    
<div class = "favorites grid grid-cols-10 gap-2">
    {#each favorites as favFood, i}
        <button id={i} on:click={pushFavoriteToList} on:contextmenu = {removeFromFavorites}>
            <img src={favFood.photo} alt={favFood.name} class="w-full h-full object-cover" >
        </button>
        
    {/each}
</div>

<div id='food-table' class='border border-carb-dark'>
    <div id = 'food-table-header' class='grid grid-cols-12 gap-0 font-bold'>
        <th class=''></th>
        <th class='grid grid-cols-subgrid col-span-5'>Name</th>
        <th class=''>GI</th>
        <th class=''>GL</th>
        <th class=''>kcal</th>
        <th class=''>Carbs</th>
        <th class=''>Prots</th>
        <th class=''>Fats</th>
    </div>
    <div id='food-table-content' class=''>
    {#each rows as food , i}
    <button id={i} on:click={pushFromTable} class='border border-carb-dark row group grid grid-cols-12 gap-0 w-full'>
        <td class= " group-hover:bg-fat-dark "><img class = "object-cover w-full h-full " loading = "lazy" decoding ="async" src= {food.photo} alt="{food.name}"></td>
        <td id="food-name" class="grid grid-cols-subgrid col-span-5 border group-hover:bg-fat-dark align-center h-full">
            <div id='name&button' class="col-start-1 col-end-6 text-left ">
                <span class="">{food.name}</span>
                {#if !favorites.some(fav=>fav.name===food.name)||!favorites.length}
                    <button class="text-fat-dark" id={i} on:click={saveToFavorites}> ★ </button> 
                {:else}
                <span class="">★</span>
                {/if}
            </div>
        </td>
        <td class= "text-left align-middle h-full group-hover:bg-fat-dark">{food.GI}</td>
        <td class= "text-left align-middle h-full group-hover:bg-fat-dark">{food.GL}</td>
        <td class= "text-left align-middle h-full group-hover:bg-fat-dark">{food.calories}</td>
        <td class= "text-left align-middle h-full group-hover:bg-fat-dark">{food.carbohydrates}</td>
        <td class= "text-left align-middle h-full group-hover:bg-fat-dark">{food.proteins}</td>
        <td class= "text-left align-middle h-full group-hover:bg-fat-dark">{food.fats}</td>
    </button>
    {/each}
    </div>
</div>
<style>

</style>

