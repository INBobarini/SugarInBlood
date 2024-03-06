<script>
    export let listedFoods
    export let total
    
    let isAccOpen  = true;
    $: accSymbol = isAccOpen  ? '-' : '+'

    function toggleAccord() {
        isAccOpen  = !isAccOpen ;  
    }

    let gramsArray = []

    function removeFromList(event){
        listedFoods.splice(this.id,1)
        listedFoods = [...listedFoods]
        gramsArray.splice(this.id,1)
        gramsArray = [...gramsArray]
    }
    function addGrams(event){
        total = listedFoods.map((food, i)=>{
            let macros = {...food}
            macros.name = food.name
            macros.calories = food.calories * gramsArray[i] / 100
            macros.carbohydrates = food.carbohydrates * gramsArray[i] / 100
            macros.proteins = food.proteins * gramsArray[i] / 100
            macros.fats = food.fats * gramsArray[i] / 100
            macros.grams = gramsArray[i] 
            return macros 
        }) 
    }
</script>
<div class='container accordion min-w-sm'>
    <div class='accordion-item' class:active={isAccOpen}>
        <div class="accordion-header selected-foods-header h-8 mb-1 container flex justify-between">
            <button class="accordion-btn" on:click={toggleAccord}>{accSymbol}</button>
            <h3 >Selected meals</h3>
        </div>
        <div class="accordion-content flex flex-wrap">
            {#each listedFoods as food, i}
            <div class="flex h-12 w-1/2">
                <div class="flex relative w-12">
                    <img class="object-cover" src={food.photo} alt="{food.name}">
                    <button class='bg-protein-light h-6 w-6 rounded-full text-fat-dark hover:bg-protein-dark' style='position: absolute; top: 0; right: 0;' id={i} on:click={removeFromList}>X</button>
                </div>
                <input class="w-1/2 h-full" name='grams' type="number" placeholder="grams" bind:value={gramsArray[i]}>
                <input class="w-1/3 h-full" name="time" type="time" step="1800">
            </div>
            {/each}
            <div class="flex h-12 items-center">
                <span class="flex ">Day:</span>
                <input type="date" class="max-h-8">
                <button class='bg-kcal-light rounded text-black max-h-8 p-1' on:click={addGrams}> ArrowLeft </button>
            </div>
        </div>
    </div>
</div>
    

<style>
    
</style>