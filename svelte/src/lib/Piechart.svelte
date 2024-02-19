<script>
export let macrosSingleDayObj = {}
export let chartDataAndLayout = []
    function getChartDataFromMacros(macrosSingleDayObj){
        
        let data = [
        {
            values: [
                macrosSingleDayObj.carbohydrates,
                macrosSingleDayObj.proteins, 
                macrosSingleDayObj.fats
                ],
            labels: ["Carbohydrates","Proteins", "Fats"],
            type: 'pie',
            hole: .4,
            //text: `${macrosSingleDayObj.calories}<br>kcal`,
            marker:{
                colors: ["red","blue","green"]
            } 
        }
    ];
        let layout = 
        { 
            annotations: [{
            font: {
                size: 20
            },
            showarrow: false,
            text:`${macrosSingleDayObj.calories}<br>kcal`,
            x: 0.5,
            y: 0.5
            }],
            height: 400,
            width: 600,
        }        
        return [data,{layout}]
}
$: chartDataAndLayout = getChartDataFromMacros(macrosSingleDayObj)


/*<Plot
                {data},
                    layout={{ 
                        annotations: [{
                        font: {
                            size: 20
                        },
                        showarrow: false,
                        text: '1337<br>kcal',
                        x: 0.5,
                        y: 0.5
                        }],
                        height: 400,
                        width: 600,}
                        }
                        />
*/
</script>
