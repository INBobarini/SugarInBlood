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
<div class="border">
    <h3 class="font-bold">Selected meals</h3>
    {#each listedFoods as food, i}
        <div class="flex flex-row max-w-full border border-red-dark">
            <img class="w-1/6" src={food.photo} alt="{food.name}">
            <span class="align-middle w-1/2 border-t border-b">{food.name}</span>
            <input class="h-100 w-1/4"name='grams' type="number" bind:value = {gramsArray[i]}>
            <button class="bg-red-700 w-1/12" id={i} on:click={removeFromList}>X</button>
        <br>
        </div>
    {/each}
    <button class='bg-green-dark text-black border-b-red' on:click={addGrams}>Submit</button>
</div>