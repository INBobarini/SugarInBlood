<script>
	import MealCard from './MealCard.svelte';
    import Chart from '../lib/Chart.svelte';
    export let meals
    export let totalMacros

    let isAccordionOpen  = true;
    $: accordionSymbol = isAccordionOpen  ? '-' : '+'

    function toggleAccordion() {
        isAccordionOpen  = !isAccordionOpen ;  
    }

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

<div class="accordion w-full">
    <div class="accordion-item" class:active={isAccordionOpen}>
        {#if totalMacros}
            <div class='accordion-header flex justify-between h-8' >
                <button class="accordion-btn" on:click={toggleAccordion}>{accordionSymbol}</button> 
                <h3 >Summary </h3>
            </div>
            <div class='accordion-content '>
                <div class="flex flex-wrap">
                    {#each meals as meal}
                        <MealCard bind:meal={meal}/>
                    {/each}
                </div>
                {#if 'calories' in totalMacros}
                    <Chart bind:data={totalMacros}/>
                {/if}
            </div>
        {/if}
    </div>
</div>


<style>


</style>
