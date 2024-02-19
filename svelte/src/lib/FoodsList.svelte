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

<div class="listed-row">
    {#each listedFoods as food, i}
        <span>{i}</span>
        <img src={food.photo} alt="">
        <span>{food.name}</span>
        <input name='grams' type="number" bind:value = {gramsArray[i]}>
        <span>grams</span>
        <button id={i} on:click={removeFromList}>X</button>
        <br>
    {/each}
    <button on:click={addGrams}>Submit</button>
</div>