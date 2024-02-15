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
        console.log(selectedMeals)
        function sum(arr, propertyToReduce){
            let total = 0
            return arr.reduce((total, meal) => 
            
            total + (meal[propertyToReduce]), 0)
            }
        
        totalMeal['calories'] = Math.trunc(sum(selectedMeals,'calories'))
        totalMeal['carbohydrates'] = Math.trunc(sum(selectedMeals,'carbohydrates'))
        totalMeal['proteins'] = Math.trunc(sum(selectedMeals,'proteins'))
        totalMeal['fats'] = Math.trunc(sum(selectedMeals,'fats'))
        return totalMeal
    }

    $: sumOfMacros = sumMacros(selectedMeals)
</script>