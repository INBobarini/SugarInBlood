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

<div class = 'main'>
    <div class = 'food-menu'>
        <div class ='food-menu-header'>
            <div class = 'alphabet'>
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
    <div class = 'selected-foods'>
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
.food-menu {
    width: 70%;
    float: left;
}
.food-menu-header{
    display: flex
}
.food-menu-content{
    width: 100%;
    border: 1px solid orange
}

.selected-foods {
    width: 30%;
    float: left;
}
</style>
