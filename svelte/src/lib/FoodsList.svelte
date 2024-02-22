<script>
    export let listedFoods
    export let total
    

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
            macros.carbohydrates = food.carbohydrates * gramsArray[i] / 100
            macros.fats = food.fats * gramsArray[i] / 100
            macros.grams = gramsArray[i] 
            return macros 
        }) 
        
    }
</script>
<div class="flex justify-between">
    <h3 class="font-bold">Selected meals</h3>
    <input placeholder ="day" type="date">
    <button class='bg-kcal-light rounded text-black border-b-red' on:click={addGrams}>Submit</button>
</div>
<div class="grid grid-cols-2">
    {#each listedFoods as food, i}
        <div class="grid grid-cols-6 border">
            <img class="col-span-1" src={food.photo} alt="{food.name}">
            <input class="col-span-4" name='grams' type="number" placeholder="grams" bind:value = {gramsArray[i]}>
            <button class="bg-white border border-gray-500" id={i} on:click={removeFromList}>X</button>
        </div>
    {/each}
</div>
