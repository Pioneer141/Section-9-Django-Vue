<template>
<div>
    <h2>League Table</h2>
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width:100%;margin:0px auto;">
        <el-table-column prop="id" label="rank" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="name" width="180" align="center">
        </el-table-column>
        <el-table-column prop="stdnu" label="student number" width="180" align="center">
        </el-table-column>
        <el-table-column prop="" label="" width="600" align="center">
        </el-table-column>
        <el-table-column prop="conut" label="Number of problem solving" width="180" align="center">
        </el-table-column>
        <el-table-column prop="credit" label="integral" width="180" align="center">
        </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pagesize" layout="total, prev, pager, next" :total="total">
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            total:0,
            search: '',
            currentPage:1,
            pagesize:10,
            centerDialogVisible: false
        }
    },
    methods: {
         getdata() {
            var self = this;
            this.$axios.get('http://localhost:3000/rank')
                .then(function (response) {
                     console.log(response);
                    self.tableData = response.data;
                    self.total=self.tableData.length
                })
        },
        handleSizeChange(val) {
        this.pagesize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        }
    },
    created() {
        this.getdata();
    },

}
</script>

<style scoped>
h2 {
    color: rgb(167, 157, 157);
    text-align: center;
    /* text-align: center;
    line-height: 40px;*/
    display: block;
    position: relative;
    margin-top: 65px;
}
</style>
