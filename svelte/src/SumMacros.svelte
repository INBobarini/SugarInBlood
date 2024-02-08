<script>
    export let selectedMeals = []
    export let sumOfMacros = {}
    
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
            arr.forEach(e => {
                total+= e[propertyToReduce]
            });
            return total.toFixed(1)
        }
        totalMeal['calories'] = sum(selectedMeals,'calories')
        totalMeal['carbohydrates'] =sum(selectedMeals,'carbohydrates')
        totalMeal['proteins'] = sum(selectedMeals,'proteins')
        totalMeal['fats'] = sum(selectedMeals,'fats')
        console.log(totalMeal)
        return totalMeal
    }

    $: sumOfMacros = sumMacros(selectedMeals)
</script>