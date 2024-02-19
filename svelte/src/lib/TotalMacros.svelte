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
{#if totalMacros}
<table>
    <thead>
        <tr>
            <th>Food</th>
            <th>g</th>
            <th>kcal</th>
            <th>C</th>
            <th>P</th>
            <th>F</th>
        </tr>
    </thead>
    <tbody>
        {#each meals as meal}
        <tr>
            <td><img src= {meal.photo} alt= {meal.name}/></td>
            <td>{meal.grams}</td>
            <td>{meal.calories}</td>
            <td>{meal.carbohydrates}</td>
            <td>{meal.proteins}</td>
            <td>{meal.fats}</td>
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

<style>
    td, th{
        width: 25px;
        height: 25px;
        border: 0.5px solid black;
        text-align: center; 
        vertical-align: middle;
    }
</style>
