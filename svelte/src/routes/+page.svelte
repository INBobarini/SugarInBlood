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

<div class ='container flex flex-col md:flex-row-reverse border'>
    <div class= 'food-menu w-full md:w-4/6 order-2 p-2 m-2 border'>
        <div class ='food-menu-header'>
            <FilterByInitial rows = {foods} bind:filteredRows = {foodsToShow}/>
            <FilterByQuery rows = {foods} bind:filteredRows = {foodsToShow}/>
        </div>
        <div class="food-menu-content">
            {#if foods}
            <FoodsTable rows = {foodsToShow} bind:selectedRows = {selectedFoods} bind:favorites = {favoriteFoods}/>
        {/if}
        </div>
    </div>
    <div class='selected-foods w-full md:w-2/6 order-1 p-2 m-2 border border-yellow'>
        <div class = 'selected-foods-list bg-gray-100 rounded'>
            {#if selectedFoods.length}
                <FoodsList bind:listedFoods = {selectedFoods} bind:total = {totalMeals}/>
            {/if}
        </div>
        <div class = 'selected-foods-summary'>
            {#if totalMeals.length !== 0}
                <TotalMacros bind:meals = {totalMeals} bind:totalMacros = {totalMacros}/>
            {/if}
        </div>
        <div class = 'selected-foods-chart'>
        {#if 'calories' in totalMacros}
            <Chart bind:data={totalMacros}/>
        {/if}
        </div>
    </div>
</div>

<style>
*{
    font-family: 'roboto';
    color: #402218
}
.food-menu{
    background-color: #FCF0C8;
    border-radius: 1em;
    border: 0.25em solid #FACE7F
}

</style>
