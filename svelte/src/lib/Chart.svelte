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
            labels: ["Carbohydrates[g]","Proteins[g]", "Fats[g]"],
            type: 'pie',
            hole: .4,
            //text: `${macrosSingleDayObj.calories}<br>kcal`,
            marker:{
                colors: ["#c68b59","#911f27","#face7f"]
            },
            
            automargin: true 
        }
        ]
        return dataGenerated
    }
    function generateLayout(data){
    
    let layoutOpts = { 
        annotations: [{
        font: {
            size: 16,
            color: '#32502e'
        },
        showarrow: false,
        text:`${data.calories}<br>kcal`,
        x: 0.5,
        y: 0.5
        }],
        showlegend: false,
        height: 350,
        width: 350,
        plot_bgcolor: 'rgba(255, 255, 255, 0)',
        paper_bgcolor: 'rgba(255, 255, 255, 0)'
        }    
        return layoutOpts    
    }
    $: dataOpts = generateData(data)
    $: layoutOpts = generateLayout(data)
</script>

{#if dataOpts}
<div id="chart-container" class="flex justify-center">
    <Plot {...{ data: dataOpts, layout: layoutOpts }} />
</div>
{/if}
