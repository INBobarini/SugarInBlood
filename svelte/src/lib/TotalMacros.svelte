<script>
    export let meals
    export let totalMacros

    function sumMacros(meals){
        let total = {}
        total.calories = sum (meals, 'calories')
        total.carbohydrates = sum (meals, 'carbohydrates')
        total.proteins = sum (meals, 'proteins')
        total.fats = sum (meals, 'fats')
        total.grams = sum (meals, 'grams')
        
        function sum (meals, macro){
            return meals.reduce((total, meal)=>{
                return Math.round(total + meal[macro], 1)
            }, 0)
        }
        
        return total
    }
    $: totalMacros = sumMacros(meals)
</script>
<div>

{#if totalMacros}
    <div id = 'macros-summary' class='w-full'>
        <h3>Summary</h3>
        <div id="summary-header"class ='grid grid-cols-6'>
            <th class=' '>Food</th>
            <th class=' '>g</th>
            <th class=' '>kcal</th>
            <th class=' '>C</th>
            <th class=' '>P</th>
            <th class=' '>F</th>
        </div>
        {#each meals as meal}
        <div id = "summary-content" class='grid grid-cols-6'>
            <td class='flex items-center justify-center'><img src= {meal.photo} alt= {meal.name} class='w'/></td>
            <td class='text-center'>{meal.grams}</td>
            <td class=' text-center'>{meal.calories}</td>
            <td class=' text-center'>{meal.carbohydrates}</td>
            <td class=' text-center'>{meal.proteins}</td>
            <td class=' text-center'>{meal.fats}</td>
        </div>
        {/each}
        <div id=summary-totals class='grid grid-cols-6'>
            <th id='tf'>Total</th>
            <th id='tf'>{totalMacros.grams}</th>
            <th id='tf'>{totalMacros.calories}</th>
            <th id='tf'>{totalMacros.carbohydrates}</th>
            <th id='tf'>{totalMacros.proteins}</th>
            <th id='tf'>{totalMacros.fats}</th>
        </div>
    </div>
{/if}
</div>
<style>


</style>
