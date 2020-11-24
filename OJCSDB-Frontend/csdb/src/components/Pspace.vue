<template>
  <div id="app12">
    <!-- Main contents in the middle;background:#eeeeee  -->
    <el-row style="height:1000px" type="flex" justify="center"  class="row-header1">
      <el-col :span="16">
        <br>
        <h1 style="font-size:50px;margin-top:0px;">hi,Welcome to the personal page{{ welcome }}</h1>
        <p>I hope you have a good experience!</p>
        <!-- Personal information -->
        <el-row id="app0" :gutter="20">
          <el-col :span="24">
            <el-card shadow="always" class="card0">
                <h1>Personal information<i class="el-icon-user"></i></h1>
                <!-- Picture upload -->
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible1">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <el-divider></el-divider>
                <!-- Personal information button -->
                <div class="button">
                  <a href="#/app1"><el-button icon="el-icon-s-home" circle class="button1"></el-button></a>
                  <a href="#/app2"><el-button icon="el-icon-edit" circle class="button2"></el-button></a>
                  <a href="#/app3"><el-button icon="el-icon-star-off" circle class="button3"></el-button></a>
                  <a href="#/app4"><el-button icon="el-icon-box" circle class="button4"></el-button></a>
                  <!-- <a href=""><el-button icon="el-icon-notebook-1" circle  @click="drawer = true"></el-button></a> -->
                  <!-- <el-button icon="el-icon-notebook-1" circle  @click="drawer = true"></el-button> -->

                </div>
                <el-divider></el-divider>
                                <el-table
                  :data="tableData0"
                  style="width: 100%"
                  border="true"
                  show-header="false">
                  <el-table-column
                    prop="date">
                  </el-table-column>
                  <el-table-column
                    prop="name">
                  </el-table-column>
                </el-table>
                <!-- Drawer (keep personal information) -->
                <el-drawer
                  title="I'm the title"
                  :visible.sync="drawer"
                  :with-header="false">
                  <span>Personal information</span>
                </el-drawer>
            </el-card>
          </el-col>
        </el-row>
        <br>
      </el-col>
    </el-row>
    <!-- <router-view/> -->
  </div>
</template>
<script>
export default {
  name:'App',
  data()
  {
    return {
        drawer: false,
        dialogImageUrl: '',
        dialogVisible1: false,
        welcome: 'Welcome to my home page',
        pj_name: 'Personal homepage',
        indexsb:[],
        tableData0: [{
            date: 'Nickname',
            name: indexsb.personname,
          }, {
            date: 'Student number',
            name: indexsb.student_id,
          } ,
          {
            date: 'Number of my questions',
            name: indexsb.qcount,
          }, {
            date: 'Number of my answers',
            name: indexsb.acount,
          }, {
            date: 'Number of my collections',
            name: indexsb.store,
          }, 
          ],
    };
  },
  methods:{
    // Picture upload
    mine(){
      var self=this;
       this.$axios.get("http://192.168.1.101:8000/userExtensions/",).then(function (response) {
         response.data.forEach((item, i) => {
           if(this.$root.id==item.student_id)
           self.indexsb.push(item);
        })
    })},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible1 = true;
    }
},
created(){
  this.mine();
}
}
</script>
<style scoped>
#app12{
  position: relative;
  text-align: center;
  margin:0 auto;
  top:40px;
  background: url(../assets/14.jpg);
  
}
.el-card{
  background: rgb(252, 252, 252);
  width: 100%;
  display: inline-block;
  margin: 0;
  border-radius: 16px;
}
/* Picture upload */
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  /*  */
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    float: left;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
/* background */
.row-header1 {
    background-image: url();
/* background-color: yellow; */
}
/* The color of the card */
.el-card1{
  background: azure;
  width: 100%;
  display: inline-block;
  margin: 0.3cm;
  border-radius: 16px;
    opacity: 0.5;
}
.card0 {
  background: rgb(250, 248, 235);
  width: 60%;
  display: inline-block;
  margin: 0.3cm;
  border-radius: 16px;
  opacity: 0.5;
}
</style>