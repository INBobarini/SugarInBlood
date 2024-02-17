<script>
    export let food
    export let foodsToShow
    function pushFood(event) {
        /**/
        const selectedFoodName = food.name;
        const selectedFood = foodsToShow.find(food => food.name === selectedFoodName);
        if(!selectedFoods) selectedFoods = []
        if (selectedFood) {
        return selectedFoods = [...selectedFoods, selectedFood];
        }
    }

</script>

<button id = {food.name} on:click={pushFood} >+</button>