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
<div class='accordion'>
    <div class='accordion-item' class:active={isAccOpen}>
        <button class="accordion-header selected-foods-header h-8 container flex justify-between"on:click={toggleAccord}>
            <button>{accSymbol}</button>
            <h3 class="font-bold">Selected meals</h3>
            <div class ="h-8">
                <span>Day to register</span>
                <input type="date" class="h-8 w-32">
                <button class='bg-kcal-light rounded text-black border-b-red h-8 w-16' on:click={addGrams}>Submit</button>
            </div>
        </button>
        <div class=" accordion-content">
            {#each listedFoods as food, i}
                <div class="grid grid-cols-3 h-16" style="position: relative;">
                    <img class="w-full h-full object-cover" src={food.photo} alt="{food.name}">
                    <button class='bg-protein-light h-6 w-6 rounded-full text-fat-dark hover:bg-protein-dark' style='position: absolute; top: 0; right: 0;' id={i} on:click={removeFromList}>X</button>
                    <input class="col-span-2" name='grams' type="number" placeholder="grams" bind:value={gramsArray[i]}>
                </div>
            {/each}
        </div>
    </div>
</div>
<style>
    
</style>