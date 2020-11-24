<template>
<div id="main" style="width: 600px;height:400px;">

</div>
</template>

<script>
// Introduce basic template
let echarts = require('echarts/lib/echarts')
// Introduction of histogram component
require('echarts/lib/chart/line')
// Introduce prompt box and title component
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
    name: 'Sightdata',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
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
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [ 'Format Error', 'Result Error','Running Error', 'Time Overrun', 'Memory Overrun']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                },
                yAxis: {
                    type: 'value'
                },

            });
            var arr0=[0,0,0,0,0,0,0];
            var arr1=[0,0,0,0,0,0,0];
            var arr2=[0,0,0,0,0,0,0];
            var arr3=[0,0,0,0,0,0,0];
            var arr4=[0,0,0,0,0,0,0];
            this.$axios.get("http://192.168.1.101:8000/questions/").then(function (res) {
                // arr.push(response.data.length);
                console.log(res);
                var j=res.data.length;
                for(var i=0;i<j;i++){
                    if(res.data[i].rtype==0){
                        if(res.data[i].create_week1time=="0")
                        arr0[6]++
                        else if(res.data[i].create_week1time=="1")
                        arr0[0]++
                        else if(res.data[i].create_week1time=="2")
                        arr0[1]++
                        else if(res.data[i].create_week1time=="3")
                        arr0[2]++
                        else if(res.data[i].create_week1time=="4")
                        arr0[3]++
                        else if(res.data[i].create_week1time=="5")
                        arr0[4]++
                        else if(res.data[i].create_week1time=="6")
                        arr0[5]++
                    }
                    else if(res.data[i].rtype==1){
                        if(res.data[i].create_week1time=="0")
                        arr1[6]++
                        else if(res.data[i].create_week1time=="1")
                        arr1[0]++
                        else if(res.data[i].create_week1time=="2")
                        arr1[1]++
                        else if(res.data[i].create_week1time=="3")
                        arr1[2]++
                        else if(res.data[i].create_week1time=="4")
                        arr1[3]++
                        else if(res.data[i].create_week1time=="5")
                        arr1[4]++
                        else if(res.data[i].create_week1time=="6")
                        arr1[5]++
                    }
                    
                    else if(res.data[i].rtype==2){
                        if(res.data[i].create_week1time=="0")
                        arr2[6]++
                        else if(res.data[i].create_week1time=="1")
                        arr2[0]++
                        else if(res.data[i].create_week1time=="2")
                        arr2[1]++
                        else if(res.data[i].create_week1time=="3")
                        arr2[2]++
                        else if(res.data[i].create_week1time=="4")
                        arr2[3]++
                        else if(res.data[i].create_week1time=="5")
                        arr2[4]++
                        else if(res.data[i].create_week1time=="6")
                        arr2[5]++
                    }
                    else if(res.data[i].rtype==3){
                        if(res.data[i].create_week1time=="0")
                        arr3[6]++
                        else if(res.data[i].create_week1time=="1")
                        arr3[0]++
                        else if(res.data[i].create_week1time=="2")
                        arr3[1]++
                        else if(res.data[i].create_week1time=="3")
                        arr3[2]++
                        else if(res.data[i].create_week1time=="4")
                        arr3[3]++
                        else if(res.data[i].create_week1time=="5")
                        arr3[4]++
                        else if(res.data[i].create_week1time=="6")
                        arr3[5]++
                    }
                    else if(res.data[i].rtype==4){
                        if(res.data[i].create_week1time=="0")
                        arr4[6]++
                        else if(res.data[i].create_week1time=="1")
                        arr4[0]++
                        else if(res.data[i].create_week1time=="2")
                        arr4[1]++
                        else if(res.data[i].create_week1time=="3")
                        arr4[2]++
                        else if(res.data[i].create_week1time=="4")
                        arr4[3]++
                        else if(res.data[i].create_week1time=="5")
                        arr4[4]++
                        else if(res.data[i].create_week1time=="6")
                        arr4[5]++
                    }
                }
                console.log(arr1)
                 myChart.setOption({
                series: [{
                        name: 'Format Error',
                        type: 'line',
                        data: arr0
                    },
                    {
                        name: 'Result Error',
                        type: 'line',
                        data: arr1
                    },
                     {
                        name: 'Running Error',
                        type: 'line',
                        data: arr2
                    },
                    {
                        name: 'Time Overrun',
                        type: 'line',
                        data: arr3
                    },
                   
                    {
                        name: 'Memory Overrun',
                        type: 'line',
                        data:arr4
                    }
                    
                ]
                });
            });
           
        }
    }
}
</script>
