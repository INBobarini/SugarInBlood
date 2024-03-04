<script>
    export let rows
    export let selectedRows
    export let favorites

    let isAccordionOpen = true;
    $: accordionSymbol = isAccordionOpen ? '-' : '+'

    function toggleAccordion() {
        isAccordionOpen = !isAccordionOpen;
    }

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
    
<div class="favorites flex gap-2 max-h-8 w-full">
    {#each favorites as favFood, i}
    <div class="h-16" style="position: relative;">
        <button id={i} on:click={pushFavoriteToList} class="h-full w-16 relative">
            <img src={favFood.photo} alt={favFood.name} class="h-full">
            <button id={i} on:click={removeFromFavorites} class='bg-protein-light h-6 w-6 rounded-full text-fat-dark hover:bg-protein-dark' style="position: absolute; top: 0; right: 0; ">X</button>
        </button>
    </div>
    {/each}
</div>
<div class='accordion container'>
    <div id='food-table' class='accordion-item' class:active={isAccordionOpen} >
        <button id = 'food-table-header' class='accordion-header w-full grid grid-cols-12 '>
            <th class='col-span-1'>
                <button class='accordion-btn' on:click={toggleAccordion}> {accordionSymbol}  </button>
            </th>
            <th class='col-span-5'>Name</th>
            <th class='col-span-1'>GI</th>
            <th class='col-span-1'>GL</th>
            <th class='col-span-1 text-kcal-light'>kcal</th>
            <th class='col-span-1 text-carb-light'>Carbs</th>
            <th class='col-span-1 text-protein-light'>Prots</th>
            <th class='col-span-1 text-fat-light'>Fats</th>
        </button>
        <div id='food-table-content' class='accordion-content'>
            {#each rows as food , i}
            <button id={i} on:click={pushFromTable} class='row group grid grid-cols-12 gap w-full'>
                <td class= "group"><img class = "object-cover w-full h-full " loading = "lazy" decoding ="async" src= {food.photo} alt="{food.name}"></td>
                <td id="food-name" class="grid grid-cols-subgrid col-span-5 group-hover:bg-fat-dark group-hover:text-carb-dark align-center h-full">
                    <div id='name&button' class="col-start-1 col-end-6 text-left ">
                        <span class="">{food.name}</span>
                        {#if !favorites.some(fav=>fav.name===food.name)||!favorites.length}
                            <button class="" id={i} on:click={saveToFavorites}> ★ </button> 
                        {:else}
                        <span class="text-fat-dark group-hover:text-carb-dark"  >★</span>
                        {/if}
                    </div>
                </td>
                <td class= "text-left align-middle h-full group-hover:bg-fat-dark group-hover:text-carb-dark">{food.GI}</td>
                <td class= "text-left align-middle h-full group-hover:bg-fat-dark group-hover:text-carb-dark">{food.GL}</td>
                <td class= "text-kcal-light text-left align-middle h-full group-hover:bg-fat-dark group-hover:text-carb-dark">{food.calories}</td>
                <td class= "text-carb-light text-left align-middle h-full group-hover:bg-fat-dark group-hover:text-carb-dark">{food.carbohydrates}</td>
                <td class= "text-protein-light text-left align-middle h-full group-hover:bg-fat-dark group-hover:text-carb-dark">{food.proteins}</td>
                <td class= "text-fat-light text-left align-middle h-full group-hover:bg-fat-dark group-hover:text-carb-dark">{food.fats}</td>
            </button>
            {/each}
        </div>
    </div>
</div>
<style>
</style>

