<script>
    export let meal
</script>

<div class='w-1/2 h-30  p-1'>
    <div class='w-full h-8 overflow-ellipsis truncate items-end'>{meal.grams}g of {meal.name}</div>
    <div class='flex  font-bold'>
        <img src= {meal.photo} alt= {meal.name}  class='h-16 rounded-full'/>
        <div class=" flex flex-col w-full h-full">
            <div class='flex justify-around h-8 items-center'>
                <div class="text-kcal-light"> {meal.calories} kcal </div>
            </div>
            <div class='flex justify-around h-8 items-center'>
                <div class="text-carb-light"> {meal.carbohydrates}g </div>
                <div class="text-protein-light"> {meal.proteins}g  </div>
                <div class="text-fat-light"> {meal.fats}g </div>
            </div>
        </div>
    </div>
</div>

