<template>
<div class="block">

    <el-carousel :interval="5000">
        <el-carousel-item v-for="item in lists" :key="item">
            <br><br>
            <p class="medium" @mouseenter="item.isShowPopover = true"
    @mouseleave="item.isShowPopover = false">Submission Number:{{item.tjbh}}</p>
            <p class="medium">Error Type:{{item.rtype}}</p>
            <p class="medium">Student Number:<br>{{item.stdnb}}</p>
            <el-popover
            id="opo"
            placement="bottom"
            title=""
            width="400"
           v-model="item.isShowPopover" >
            <div><h3>Problem Description</h3>
            <p>{{item.wtms}}</p></div></el-popover>
        </el-carousel-item>
    </el-carousel>

</div>
</template>

<script>
export default {
    name: "Quecard",
    data() {
        return {
            lists: [   
            ]
        }
    },
    methods: {
    getdata() {
            var self = this;
            this.$axios.get('http://192.168.1.101:8000/questions/')
                // .then(function (data) {
                //     console.log(data);
                // })
                .then(function (response) {
                     console.log(response);
                    self.lists = response.data;
                    // self.total=self.tableData.length;
                     self.lists.forEach((item,i) => {
                         if(item.rtype==0)
                          item.rtype="Format Error";
                         else if(item.rtype==1)
                         item.rtype="Result Error";
                          else if(item.rtype==2)
                         item.rtype="Running Error";
                          else if(item.rtype==3)
                         item.rtype="Time Overrun";
                          else if(item.rtype==4)
                         item.rtype="Memory Overrun";
                          else if(item.rtype==5)
                         item.rtype="Output Overrun";
                          else if(item.rtype==6)
                         item.rtype="Compilation Error";
                    })
                })
        },
    },
    created() {
        this.getdata();
    },
}
</script>

<style>
#opo{
    width:400px;
    position: absolute;
    top: 185px;
    left:0%;
    
}

.el-carousel,
.el-carousel__item {
    overflow: -Scroll;
    overflow-y: hidden; 
    width: 300px;
    height: 300px;
    color: black; 
    font-size: 23px;
    opacity: 0.99;
    border-radius: 16px;
    text-align: center;
    line-height: 19px;
}
.el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>

/*.card {
    margin-top: 180px;
}

.el-carousel__item {
    color: black;
    font-size: 30px;
    opacity: 0.99;
    border-radius: 16px;
    text-align: center;
    line-height: 19px;
}

.el-carousel__item:nth-child(2n) {
    background-color: lavender;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: seashell;
}*/
