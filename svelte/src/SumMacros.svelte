<script>
    export let sumOfMacros = {}
    export let selectedMeals = []
    
    function sumMacros(selectedMeals){
        //TO DO: add logging to an specific day/date
        let totalMeal={}
        if(selectedMeals.length===0) {
            totalMeal['calories'] = 0
            totalMeal['carbohydrates'] = 0
            totalMeal['proteins'] = 0
            totalMeal['fats'] = 0
            return totalMeal
        }
        function sum(arr, propertyToReduce){
            let total = 0
            return arr.reduce((total, meal) => total + meal[propertyToReduce]*1, 0);
        }
        totalMeal['calories'] = sum(selectedMeals,'calories')
        totalMeal['carbohydrates'] =sum(selectedMeals,'carbohydrates')
        totalMeal['proteins'] = sum(selectedMeals,'proteins')
        totalMeal['fats'] = sum(selectedMeals,'fats')
        return totalMeal
    }

    $: sumOfMacros = sumMacros(selectedMeals)
</script>