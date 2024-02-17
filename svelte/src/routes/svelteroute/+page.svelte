<script>
//--- base data from the .js sibling ---
export let data

//--- Components ---
import FoodsTable from '../../FoodsTable.svelte';
import FilterByInitial from '../../FilterByInitial.svelte';
import FilterByQuery from '../../FilterByQuery.svelte';
import FoodsList from '../../FoodsList.svelte';
import TotalMacros from '../../TotalMacros.svelte';
import Chart from '../../Chart.svelte';

//--- State Variables ---

let foods = data.foods
$: foodsToShow = []
$: selectedFoods = []
$: totalMeals = []
$: totalMacros = {}
$: console.log(totalMacros)
</script>

<div class = 'main'>
    <div class = 'column'>
        <FilterByInitial rows = {foods} bind:filteredRows = {foodsToShow}/>
        <FilterByQuery rows = {foods} bind:filteredRows = {foodsToShow}/>
        {#if foods}
            <FoodsTable rows = {foodsToShow} bind:selectedRows = {selectedFoods}/>
        {/if}
    </div>
    <div class = 'column'>
        {#if selectedFoods.length}
            <h3>Selected meals</h3>
               <FoodsList bind:listedFoods = {selectedFoods} bind:total = {totalMeals}/>
        {/if}
        {#if totalMeals.length !== 0}
            <TotalMacros bind:meals = {totalMeals} bind:totalMacros = {totalMacros}/>
        {/if}
        {#if 'calories' in totalMacros}
            <Chart bind:data={totalMacros}/>
        {/if}
    </div>
</div>

<style>
.main {
    display: flex
}
</style>
