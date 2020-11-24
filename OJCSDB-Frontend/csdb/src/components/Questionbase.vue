<template>
  <div class="base">
       <p>
        <a class="n" href="#/quebase"><i class="el-icon-mouse"></i>Debug</a>
        <a class="y" href="#/forhelp"><i class="el-icon-s-opportunity"></i>Help</a>
    </p>
    <h2>Reward List</h2>
    <el-table
      :data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
      stripe
      style="width: 100%; margin: 0px auto"
      :row-style="{height: '20px'}"
    >
      <el-table-column label="Student Number" prop="stdnb" align="center">
      </el-table-column>
      <el-table-column label="Question Number" prop="questionid" align="center">
      </el-table-column>
      <el-table-column label="Error Type" prop="rtype" align="center">
      </el-table-column>
      <el-table-column label="Number of Responses" prop="count" align="center">
      </el-table-column>
       <el-table-column label="Submission Time" prop="create_time" align="center">
      </el-table-column>
      <el-table-column align="center">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Enter keyword search" />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="info"
            round
            plain
            @click="lookquestion(scope.$index, scope.row)"
            >Question Details<i class="el-icon-reading"></i></el-button>
        </template>
      </el-table-column>
       <el-table-column align="right" width="60px">
        <template slot-scope="scope">
          <el-button icon="el-icon-search"  @click="lookAnswer(scope.$index, scope.row)"  size="small" circle ></el-button>
        </template>
       </el-table-column> 
    </el-table>

    <el-drawer
      title="wutilishangyin"
      :visible.sync="drawer"
      :with-header="false"
      :before-close="cleardrawer"
      :show-close="true"
      size="23%"
      >
      <el-button @click="lookAnswerdetail" type="text" style="margin:0px auto;margin-bottom:-20px;display: block;"><h3>Details of Answers<i class="el-icon-more-outline"></i></h3></el-button><br><br>
      <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :size="activity.size"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
      </el-timeline>
      <el-drawer
      title="inner"
      :append-to-body="true"
      :with-header="false"
      :visible.sync="innerDrawer"
      :direction="'rtl'"
      size="40%" style="overflow: scroll;">
      <el-button @click="" type="text" style="margin:0px auto;margin-bottom:-20px;display: block;"><h3>Details of Answers<i class="el-icon-more"></i></h3></el-button>
     <br><br>
     <el-card class="box-card" shadow="hover" v-for="answer in indexAnswer" :key="answer" style="margin-bottom:20px;">
      <div slot="header" class="clearfix">
        <span style="text-align:center;font-weight: 600; margin-bottom:0px;">Answer Time:{{answer.antime}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;store up: <el-button type="danger" icon="el-icon-star-off" @click="store" size="small" circle style="right:3px;" plain></el-button></span>
      <el-divider></el-divider>
      </div>
      <div class="item" style="margin-top:-39px;">
       <span>Respondents:{{answer.answerer}}</span><br><br>
      <span>Score:{{answer.getscore}}</span><br><br>
       <p class="wtms"><pre>Answer Content:{{answer.andetail}}</pre></p> 
      </div>
      </el-card>
      </el-drawer>
    </el-drawer>

    <el-dialog
      title="Question Details"
      :visible.sync="centerDialogVisible"
      width="39%"
      center
    >
      <p style="margin-top:0px">
        Question Number:<a class="wtbh"
          :href="
            'http://www.buctcoder.com/problem.php?id=' + indexData.questionid"
          target="_blank"
          >{{ indexData.questionid }}</a
        >
      </p>
      <p></p>
      <!--<a v-bind:href="['www.csdn.com'+item.uid]"></a>-->
      <p>Submission Number:{{ indexData.tjbh }}</p>
     <p>Problem Description:<pre>{{ indexData.wtms }}</pre></p> 
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="primary" @click="pickquestion">Claim Problem</el-button>
      </span>
    </el-dialog>
    <br>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
import bus from '../eventBus.js'
export default {
  data() {
    return {
      tableData: [],
      indexData: {
        stdnb: "",
        questionid: "",
        tjbh: "",
        wtms: "",
        count: "",
        create_time:"",
      },
      index: 0,
      total: 0,
      currentPage: 1,
      pagesize: 9,
      centerDialogVisible: false,
      drawer:false,
      innerDrawer: false,
      reverse: false,
      activities: [{
        content: 'Question Submission',
        icon:'el-icon-s-promotion',
        type: 'primary',
        size: 'large',
        timestamp: '',
      }],
      indexAnswer:[]
    };
  },

  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    getdata() {
      var self = this;
      // this.$axios.delete("http://localhost:3000/user/?count<=0")
      this.$axios.get("http://192.168.1.101:8000/questions/").then(function (response) {
        //
        console.log(response);
        self.tableData = response.data;
        self.total = self.tableData.length;
        self.tableData.forEach((item, i) => {
          if (item.rtype == 0) item.rtype = "Format Error";
          else if (item.rtype == 1) item.rtype = "Result Error";
          else if (item.rtype == 2) item.rtype = "Running Error";
          else if (item.rtype == 3) item.rtype = "Time Overrun";
          else if (item.rtype == 4) item.rtype = "Memory Overrun";
          else if (item.rtype == 5) item.rtype = "Output Overrun";
          else if (item.rtype == 6) item.rtype = "Compilation Error";
        });
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },

    lookAnswer(index, data){
      this.drawer = true;
      this.indexData=data;
      this.index = index;
      this.activities[0].timestamp=this.indexData.create_time;
      var self = this;
      this.$axios.get("http://192.168.1.101:8000/answers/",).then(function (response) {
         response.data.forEach((item, i) => {
           if(self.indexData.tjbh==item.tjbh)
           self.indexAnswer.push(item)
        });
        // console.log(response.data);
        // self.indexAnswer=response.data;
        console.log(self.indexAnswer);
        var j=self.indexAnswer.length;
        for(var i=1;i<=j;i++)
        {
          var thing={
            content:`${self.indexAnswer[i-1].answerer}had answered your question`,
            icon:'el-icon-s-flag',
            type:"success",
            size: 'large',
            timestamp:self.indexAnswer[i-1].antime,
          }
          self.activities.push(thing);
        }
      });
    },
    lookAnswerdetail(){
        this.innerDrawer = true;
    },

    store(){
      this.$message({
                    message: 'Collection Successful',
                    type: 'success',
                    duration: 1500,
                })
    },
    
    cleardrawer(){
      this.activities=[{
          content: 'Question Submission',
          timestamp: '',
          icon:'el-icon-s-promotion',
          type: 'primary',
          size: 'large',
        }],
        this.indexAnswer=[]
        this.drawer=false 
    },
    lookquestion(index, data) {
      this.centerDialogVisible = true;
      this.indexData=data;
      this.index = index;
    //   console.log(index);
    //   console.log(data); //You can get the information of the whole line
    },
    //Soon, XXX got the problem
    pickquestion() {
      this.$confirm('Are you sure you want to claim this question?', 'Tips', {
          confirmButtonText: 'Determine',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.centerDialogVisible = false;
          // var self = this;
          this.index+=2;
          this.indexData.count-=1;
          // console.log(this.indexData.count);
          let gs={count:this.indexData.count};
          console.log(gs);
          this.$axios.patch(`http://192.168.1.101:8000/questions/${this.index}/`,gs);
          this.$message({
            type: 'success',
            message: 'Successful Claim!'
          });
          this.$router.push({path: '/answer'})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Cancelled'
          });          
        });
      
    },
    
  },
  created() {
    this.getdata();   
  },
  beforeDestroy () {
    bus.$emit('add',this.indexData);
    }
};
</script>

<style>
.el-drawer.rtl{
    overflow: scroll;
}
</style>
<style scoped>
.el-card{
  background-color:#dce7f3ab;
}
  .text {
      font-size: 14px;
      font-weight: 555;
    }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 586px;
  }
  .wtms{
    margin-top: 0px;
      font-size: 15px;
      font-weight: 586;
    }
.el-dialog{
border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.base {
  margin-top: 60px;
  position: relative;
}
h3{
  text-align: center;
}
h2 {
  color: rgb(167, 157, 157);
  text-align: center;
  /* text-align: center;
    line-height: 40px;*/
  display: block;
  position: relative;
  margin-top: -20px;
}
.n {
  margin-left: 20px;
  margin-right: 40px;
}
p {
  /* text-align: center;
    line-height: 40px;*/
  position: relative;
  margin: 80x auto;
  margin-top: 66px;
}
a {
  text-decoration: none;
  font-size: 16px;
  margin-right: 28px;
  color: rgb(167, 157, 157);
  font-weight: 520;
}
.y:hover {
  color: rgb(145, 197, 145);
}

.n:hover {
  color: rgb(243, 152, 152);
}
.wtbh{
  font-size: 15px;
}
.wtbh:hover{
  text-decoration:underline;
  color:darkslateblue;

}
</style>
