<script>
//--- base data from the .js sibling ---
export let data

//--- Components ---
import FoodsTable from '../lib/FoodsTable.svelte';
import FilterByInitial from '../lib/FilterByInitial.svelte';
import FilterByQuery from '../lib/FilterByQuery.svelte';
import FoodsList from '../lib/FoodsList.svelte';
import TotalMacros from '../lib/TotalMacros.svelte';
import Chart from '../lib/Chart.svelte';

//--- State Variables ---

let foods = data.foods
$: favoriteFoods = []
$: foodsToShow = []
$: selectedFoods = []
$: totalMeals = []
$: totalMacros = {}


</script>

<div class ='container flex flex-col lg:flex-row-reverse'>
    <div class= 'food-menu w-full lg:w-4/6 order-2 p-2 m-2 border'>
        <FilterByInitial rows = {foods} bind:filteredRows = {foodsToShow}/>
        <FilterByQuery rows = {foods} bind:filteredRows = {foodsToShow}/>
        {#if foods}
        <FoodsTable rows = {foodsToShow} bind:selectedRows = {selectedFoods} bind:favorites = {favoriteFoods}/>
        {/if}
    </div>
    {#if selectedFoods.length}
    <div class='selected-foods w-full lg:w-2/6 order-1 p-2 m-2'>
        {#if selectedFoods.length}
        <FoodsList bind:listedFoods = {selectedFoods} bind:total = {totalMeals}/>
        {/if}
        {#if totalMeals.length !== 0}
        <TotalMacros bind:meals = {totalMeals} bind:totalMacros = {totalMacros}/>
        {/if}
        {#if 'calories' in totalMacros}
        <Chart bind:data={totalMacros}/>
        {/if}
    </div>
    {/if}
</div>

<style>
*{
    font-family: 'roboto';
    color: #402218
}
.food-menu, .selected-foods{
    background-color: #FCF0C8;
    border-radius: 1em;
    border: 0.25em solid #865439
}

</style>
