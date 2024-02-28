<script>
import { base } from '$app/paths';

//--- base data from the .js sibling ---
export let data

//--- Components ---
import FoodsTable from '../lib/FoodsTable.svelte';
import FilterByInitial from '../lib/FilterByInitial.svelte';
import FilterByQuery from '../lib/FilterByQuery.svelte';
import FoodsList from '../lib/FoodsList.svelte';
import TotalMacros from '../lib/TotalMacros.svelte';


//--- State Variables ---

let foods = data.foods
$: favoriteFoods = []
$: foodsToShow = [...foods.slice(0, 10)]
$: selectedFoods = []
$: totalMeals = []
$: totalMacros = {}


</script>

<div class ='container'>
    <div class= 'border border-green-400'>
        <!--<FilterByInitial rows = {foods} bind:filteredRows = {foodsToShow}/>-->
        <FilterByQuery rows = {foods} bind:filteredRows = {foodsToShow}/>
        {#if foods}
        <FoodsTable rows = {foodsToShow} bind:selectedRows = {selectedFoods} bind:favorites = {favoriteFoods}/>
        {/if}
    </div>
    <div class='border border-yellow-400'>
        {#if selectedFoods.length}
            {#if selectedFoods.length}
            <FoodsList bind:listedFoods = {selectedFoods} bind:total = {totalMeals}/>
            {/if}
            {#if totalMeals.length !== 0}
            <TotalMacros bind:meals = {totalMeals} bind:totalMacros = {totalMacros}/>
            {/if}
        {/if}
    </div>
</div>

<style>

/*
colors:{
    'carb-dark': '#865439',
    'carb-light': '#c68b59',
    'fat-dark': '#face7f',
    'fat-light': '#fcf0c8',
    'kcal-dark': '#32502e',
    'kcal-light': '#406343',
    'protein-dark': '#630a10',
    'protein-light' : '#911f27',
}
*/



</style>
