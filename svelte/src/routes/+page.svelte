<h1>Welcome to SvelteKit</h1>

<script>
    import FilterByInitial from '../FilterByInitial.svelte'
    import FilterByQuery from '../FilterByQuery.svelte'
    import SumMacros from '../SumMacros.svelte'
    import Chart from  '../Chart.svelte';

    export let data //function load returns a "data" object

    //state variables
    let foods = data.foods
    let foodsToShow
    let selectedFoods
    let mealsOfTheDay = []
    
    let totalMeal = {}
   
    //--------------
    
    //alphabet generator
    
    let searchQuery =''
    
    //-----

    function pushFood(event) {
        const selectedFoodName = event.currentTarget.id;
        const selectedFood = foodsToShow.find(food => food.name === selectedFoodName);
        if(!selectedFoods) selectedFoods = []
        if (selectedFood) {
        selectedFoods=[...selectedFoods, selectedFood];
        }
    }
    function loadMeals(event){
        mealsOfTheDay = []
        let gramsNodeList = document.querySelectorAll('.input-grams');
        let gramsArray = Array.from(gramsNodeList).map(input => parseFloat(input.value) || 0);
        if(selectedFoods.length){
            mealsOfTheDay = selectedFoods.map((e,i)=>{
                selectedFoods[i].carbohydrates*= Math.trunc(gramsArray[i]/100)
                selectedFoods[i].proteins *= Math.trunc(gramsArray[i]/100)
                selectedFoods[i].calories *= Math.trunc(gramsArray[i]/100)
                selectedFoods[i].fats *= Math.trunc(gramsArray[i]/100)
                return { ...selectedFoods[i], grams: gramsArray[i] };
            })
        }
        return mealsOfTheDay
    }
    function removeMealandInput(event){
        let elementsToRemove = document.querySelectorAll(`.${this.id}`)
        elementsToRemove.forEach(element => {element.remove()});
        console.log(selectedFoods[this.id])
        selectedFoods = selectedFoods.filter((food, i) => i !== this.id);
    }

</script>
<div id="main">
    <div id="column">
    <thead>
        <tr>
            <th colspan="2">Name</th>
            <th>GI</th>
            <th>GL</th>
            <th>kcal</th>
            <th>carbohydrates</th>
            <th>proteins</th>
            <th>fats</th>
        </tr>
    </thead>
    {#if foodsToShow}
        {#each foodsToShow as food}
            <tr>
                <td><img loading = "lazy" decoding ="async" src= {food.photo} alt="{food.name}"></td>
                <td>{food.name}</td>
                <td>{food.GI}</td>
                <td>{food.GL}</td>
                <td>{food.calories}</td>
                <td>{food.carbohydrates}</td>
                <td>{food.proteins}</td>
                <td>{food.fats}</td>
                <td><button id= {food.name} on:click={pushFood}>+</button></td>
            </tr>
        {/each}
    {/if}
    </div>
    <div id="column">
        <FilterByInitial rows = {foods} bind:filteredRows={foodsToShow}/>
        
        <input type="text" bind:value ={searchQuery}>
        <FilterByQuery rows = {foods} bind:filteredRows={foodsToShow} bind:stringFragment={searchQuery}/>
        {#if selectedFoods}
        <h3>Selected foods</h3>
            {#each selectedFoods as selectedFood, i}
            <p class= {i}>
                <input id='input-grams-{i}' class={i} type="number" value=0> 
                <button id='x-{i}' class= {i} on:click = {removeMealandInput}>X</button>
                grams of {selectedFood.name}
            </p>
            {/each}
            <button on:click={loadMeals}>Submit meals</button>
        {/if}
        <br>
        {#if mealsOfTheDay.length}
            <h3>Meals Macros</h3>
            {#each mealsOfTheDay as meal, i}
                <span><img src="{meal.photo}" alt={meal.name}> {meal.name} ({meal.grams}g) </span>
                <p>kcal:{meal.calories} || C:{meal.carbohydrates} || P:{meal.proteins} || F:{meal.fats}</p>
            {/each}
            {#if mealsOfTheDay.length > 0}
                <h3>Total</h3>
                <p>Total calories: {totalMeal.calories}</p>
                <p>Total carbohydrates: {totalMeal.carbohydrates}</p>
                <p>Total proteins: {totalMeal.proteins}</p>
                <p>Total fats: {totalMeal.fats}</p>
                <Chart bind:data={totalMeal}/>
            {/if}
        {/if}
    </div>
</div>


<SumMacros selectedMeals = {mealsOfTheDay} bind:sumOfMacros= {totalMeal}/>



<style>
    #main{
        display: flex;
    }
    #column{
        border: 1px black solid;
    }
    input{
        width: 3em;
    }
</style>