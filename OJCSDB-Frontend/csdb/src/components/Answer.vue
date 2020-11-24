<template>
<div class="gun">
<Time ref="hello"></Time>
<el-container>
  <el-header><h4>Question Number:<a
          :href="
            'http://www.buctcoder.com/problem.php?id=' + indexData.questionid"
          target="_blank"
          >{{ indexData.questionid }}</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submission Number:{{ indexData.tjbh }}</h4></el-header>
  <el-container>
    <el-aside width="500px">
    <div class="hh"><h3>Problem Description</h3>
    <el-card shadow="always">
    <p class="wtms"><pre>{{ indexData.wtms }}</pre></p>
    </el-card></div>
    </el-aside>
    <el-container>
      <el-main><h3>Answer area</h3>
        <el-input
    type="textarea"
    :rows="30"
    placeholder="Please enter content"
    v-model="textarea">
  </el-input> <br><br>
  <el-button @click="open1">Submit</el-button>
    <el-button @click="hold">Preservation</el-button>
        </el-main>
    </el-container>
  </el-container>
</el-container>
</div>
</template>

<script>
import bus from '../eventBus.js';
import Time from "./Time";
import Cookie from 'js-cookie';
export default {
  data() {
    return {
      indexData: {
        stdnb: "",
        questionid: "",
        tjbh: "",
        wtms: "",
        count: "",
      },
      textarea: '',
      getscore:'',
      anstdnb:'',
    };
  },
  computed: {
        showStdnb(){
            return Cookie.get('stdnb')
        }
    },
   methods: {
      open1() {
        if(!this.textarea){
        this.$message({
                    message: "The answer cannot be empty!",
                    type: 'warning',
                    duration: 1500,
                })
        }
        else{
        this.$confirm('Do you want to submit?', 'Tips', {
          confirmButtonText: 'Determine',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.getscore=(this.indexData.count+1)*2;
          let newAnswer={
                    tjbh:this.indexData.tjbh,
                    andetail:this.textarea,
                    answerer: this.$root.id, //Answer's School Number
                    getscore:this.getscore,
                    antime:this.$refs.hello.nowDate,
            }
            this.$axios.post('http://192.168.1.101:8000/answers/',newAnswer),
          this.$message({
            type: 'success',
            message: 'Submitted Successfully!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Cancelled'
          });          
        });
        }
      }
    },
    components:{
      Time
    },
     
  created(){
    bus.$on('add',(message)=>{
         console.log(message);
        this.indexData=message;
    })
  },
  beforeDestroy () {
   bus.$off('add')
  }
}
</script>
<style scoped>
    a {
      text-decoration: none;
      font-size: 15px;
      margin-right: 28px;
      color:darkslateblue;
      font-weight: 520;
      }
    a:hover{
      text-decoration:underline;
    }
    .wtms{
      font-size: 13px;
      font-weight: 500;
    }
    .hh{
      position: relative;
      margin-top: 25px;
    }
    .gun{
      position: relative;
      top:43px;
    }
    .el-card{
      margin-left: 0px;
      
      background-color:#dce7f3ab;
    }
    h2{
      margin-top:8px;
    }
    h4{
      text-align: center;
    }
    h3{
      line-height: 20px;
      text-align: center;
    }
    .el-header, .el-footer {
    background-color:#dce7f3;
    color: #333;
    text-align: center;
    line-height: 20px;
  }
   .el-aside {
    background-color: #ffffff;
    color: #333;
    text-align: left;
    line-height: 20px;
  }
  .el-main1{
    background-color:#E9EEF3;
        line-height: 50px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
  }
</style>