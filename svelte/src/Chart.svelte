<script>
    import Plot from "svelte-plotly.js";
    export let data

    function generateData(data){
        let dataGenerated = [
        {
            values: [
                data.carbohydrates,
                data.proteins, 
                data.fats
                ],
            labels: ["Carbohydrates","Proteins", "Fats"],
            type: 'pie',
            hole: .4,
            //text: `${macrosSingleDayObj.calories}<br>kcal`,
            marker:{
                colors: ["red","blue","green"]
            } 
        }
        ]
        return dataGenerated
    }
    function generateLayout(data){
    
    let layoutOpts = { 
        annotations: [{
        font: {
            size: 20
        },
        showarrow: false,
        text:`${data.calories}<br>kcal`,
        x: 0.5,
        y: 0.5
        }],
        height: 400,
        width: 600,
        }    
        return layoutOpts    
    }
    $: dataOpts = generateData(data)
    $: layoutOpts = generateLayout(data)
</script>
{#if dataOpts}
    <Plot {...{ data: dataOpts, layout: layoutOpts }} />
{/if}
