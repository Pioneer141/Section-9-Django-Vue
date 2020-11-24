<template>
<div id="main" style="width: 600px;height:400px;">

</div>
</template>

<script>
// Introduce basic template
let echarts = require('echarts/lib/echarts')
// Introduction of histogram component
require('echarts/lib/chart/bar')
// Introduce prompt box and title component
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
    name: 'Sightdata',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        }

    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // Initialize the echarts instance based on the prepared dom
            let myChart = echarts.init(document.getElementById('main'))
            // Charting
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // Axis indicator, axis trigger valid
                        type: 'shadow' // The default is a straight line. You can select 'line' |'shadow '
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['Submission Volume', 'Solving Times'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: []
            });
            var self = this;
            var arr=[];
            // this.$axios.delete("http://localhost:3000/user/?count<=0")
            this.$axios.get("http://192.168.1.101:8000/questions/").then(function (response) {

                arr.push(response.data.length);
				// arr.push({value:value5,name:name2});
                console.log(response);
                // self.tableData = response.data;
                // self.total = self.tableData.length;
                // self.tableData.forEach((item, i) => {
                // if (item.rtype == 0) item.rtype = "Format Error";
                // else if (item.rtype == 1) item.rtype = "Result Error";
                // else if (item.rtype == 2) item.rtype = "Running Error";
                // else if (item.rtype == 3) item.rtype = "Time Overrun";
                // else if (item.rtype == 4) item.rtype = "Memory Overrun";
                // else if (item.rtype == 5) item.rtype = "Output Overrun";
                // else if (item.rtype == 6) item.rtype = "Compilation Error";
                // });
            });
            this.$axios.get("http://192.168.1.101:8000/answers/").then(function (response) {
                arr.push(response.data.length);
                console.log(response);
                 console.log(arr);
                myChart.setOption({
                series: [{
                    name: '',
                    type: 'bar',
                    barWidth: '50%',
                   data: arr, 
                    itemStyle: {
                        // Under normal conditions：'
                        normal: {
                            // If the colorList has more than one column length in each color list, that is, the number of columns in each column array is used
                            color: function (params) {
                                var colorList = ['#d14a61', '#5793f3'];
                                return colorList[params.dataIndex];
                            }
                        },
                    }
                }]
                })
            });
        }
    }
}
</script>
