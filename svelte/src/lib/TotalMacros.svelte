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
                return total + meal[macro]
            }, 0)
        }
        
        return total
    }
    $: totalMacros = sumMacros(meals)
</script>
<div>
{#if totalMacros}
<table class='w-full'>
    <thead>
        <tr>
            <th class='w-1/6 border'>Food</th>
            <th class='w-1/6 border'>g</th>
            <th class='w-1/6 border'>kcal</th>
            <th class='w-1/6 border'>C</th>
            <th class='w-1/6 border'>P</th>
            <th class='w-1/6 border'>F</th>
        </tr>
    </thead>
    <tbody>
        {#each meals as meal}
        <tr>
            <td class='w-1/6 border text-center'><img src= {meal.photo} alt= {meal.name} class='w-full'/></td>
            <td class='w-1/6 border text-center'>{meal.grams}</td>
            <td class='w-1/6 border text-center'>{meal.calories}</td>
            <td class='w-1/6 border text-center'>{meal.carbohydrates}</td>
            <td class='w-1/6 border text-center'>{meal.proteins}</td>
            <td class='w-1/6 border text-center'>{meal.fats}</td>
        </tr>
        {/each}
    </tbody>
    <tfoot>
        <tr>
            <th> Total</th>
            <th>{totalMacros.grams}</th>
            <th>{totalMacros.calories}</th>
            <th>{totalMacros.carbohydrates}</th>
            <th>{totalMacros.proteins}</th>
            <th>{totalMacros.fats}</th>
        </tr>
    </tfoot>    
</table>
{/if}
</div>
<style>
</style>
