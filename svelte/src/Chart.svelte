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

    let layoutOpts = 
    { 
        annotations: [{
        font: {
            size: 20
        },
        showarrow: false,
        text:`${1500}<br>kcal`,
        x: 0.5,
        y: 0.5
        }],
        height: 400,
        width: 600,
    }        
    $: dataOpts = generateData(data)
</script>
{#if dataOpts}
    <Plot {...{ data: dataOpts, layout: layoutOpts }} />
{/if}
