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
$: foodsToShow = []
$: selectedFoods = []
$: totalMeals = []
$: totalMacros = {}
$: console.log(totalMacros)
</script>

<div class ='container flex flex-col md:flex-row-reverse'>
    <div class='food-menu w-full md:w-4/6 order-2'>
        <div class ='food-menu-header flex '>
            <div class = 'alphabet w-4/6 flex justify-start'>
                <FilterByInitial rows = {foods} bind:filteredRows = {foodsToShow}/>
            </div>
            <div class="query">
                <FilterByQuery rows = {foods} bind:filteredRows = {foodsToShow}/>
            </div>
        </div>
        <div class="food-menu-content">
            {#if foods}
            <FoodsTable rows = {foodsToShow} bind:selectedRows = {selectedFoods}/>
        {/if}
        </div>
    </div>
    <div class='selected-foods w-full md:w-2/6 order-1'>
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
</div>

<style>

</style>
