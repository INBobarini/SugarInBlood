<script>
    export let rows
    export let selectedRows
    export let favorites

    let stringFragment = ''
    $: filteredRows = stringFragment.length < 3 ? 
    rows.slice(0,10) :  
    rows.filter((row)=>row.name.toLowerCase().includes(stringFragment.toLowerCase())
        ).sort((a, b) => a.name.localeCompare(b.name));

    let isAccordionOpen = true;
    $: accordionSymbol = isAccordionOpen ? '-' : '+'

    function toggleAccordion() {
        isAccordionOpen = !isAccordionOpen;
    }

    function pushFromTable(event){
        let newFood = filteredRows[this.id*1]
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
        let newFood = filteredRows[this.id*1]
        if (favorites.includes(newFood)){
            return
        }
        else {
            favorites = [...favorites, newFood ]
        }
    }
</script>
    
    <div class="favorites flex gap-2 max-h-12 w-full">
        {#each favorites as favFood, i}
        <div class="h-12" style="position: relative;">
            <button id={i} on:click={pushFavoriteToList} class="h-full w-12 relative">
                <img src={favFood.photo} alt={favFood.name} class="h-full rounded-xl">
                <button id={i} on:click={removeFromFavorites} class='bg-protein-light h-6 w-6 rounded-full text-fat-dark hover:bg-protein-dark' style="position: absolute; top: 0; right: 0; ">X</button>
            </button>
        </div>
        {/each}
    </div>
    <div class="query flex flex-row justify-between h-8">
        <div class="h-8">
            <button class='accordion-btn' on:click={toggleAccordion}> {accordionSymbol} </button>
        </div>
        <div class="h-8 flex">
            <span class= " flex items-center h-full"  >Search </span>
            <input class=" flex items-center w-32 h-full" type="text" bind:value = {stringFragment}>
        </div>
    </div>    

<div class='accordion container'>
    <div id='food-table' class='accordion-item' class:active={isAccordionOpen} >
        <div id='food-table-content' class='accordion-content'>
            <div id = 'food-table-header' class='accordion-header h-8 pt-1 w-full grid grid-cols-12 '>
                <th class='col-span-1'>      
                </th>
                <th class='col-span-5'>Name</th>
                <th class='col-span-1'>GI</th>
                <th class='col-span-1'>GL</th>
                <th class='col-span-1 text-kcal-light'>kcal</th>
                <th class='col-span-1 text-carb-light'>Carbs</th>
                <th class='col-span-1 text-protein-light'>Prots</th>
                <th class='col-span-1 text-fat-light'>Fats</th>
            </div>
            {#each filteredRows as food , i}
            <button id={i} on:click={pushFromTable} class='row group grid grid-cols-12 gap w-full h-12 mb-1 hover:bg-kcal-dark hover:text-fat-light hover:rounded-full'>
                <td class= "h-full w-full "><img class = "h-12 w-16 object-cover rounded-full" loading = "lazy" decoding ="async" src= {food.photo} alt="{food.name}"></td>
                <td id="food-name" class="flex items-center h-full col-span-5">
                    <div id='name&button' class="col-start-1 col-end-6 text-left">
                        <span class="">{food.name}</span>
                        {#if !favorites.some(fav=>fav.name===food.name)||!favorites.length}
                            <button class="" id={i} on:click={saveToFavorites}> ★ </button> 
                        {:else}
                        <span class="text-fat-dark group-hover:text-carb-dark"  >★</span>
                        {/if}
                    </div>
                </td>
                <td class= "flex items-center justify-center h-full">{food.GI}</td>
                <td class= "flex items-center justify-center h-full">{food.GL}</td>
                <td class= "flex items-center justify-center h-full text-kcal-light text-center align-middle">{food.calories}</td>
                <td class= "flex items-center justify-center text-carb-light text-center align-middle h-full">{food.carbohydrates}</td>
                <td class= "flex items-center justify-center text-protein-light text-center align-middle h-full">{food.proteins}</td>
                <td class= "flex items-center justify-center text-fat-light  h-full">{food.fats}</td>
            </button>
            {/each}
        </div>
    </div>
</div>
<style>
</style>

