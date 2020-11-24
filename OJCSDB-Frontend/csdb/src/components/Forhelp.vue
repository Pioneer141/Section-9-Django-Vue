<template>
<div class="qz">
    <p>
      <a class="n" href="#/quebase"
        ><i class="el-icon-mouse"></i>Debug</a
      >
    </p>
    <div class="quelist">
        <el-form ref="form" :model="form" label-width="140px" class="farm" style="">
            <el-form-item label="School Number">
                <el-input v-model="form.stdnb" style="width:59%;"></el-input>
            </el-form-item>
            <el-form-item label="Question Number">
                <el-input v-model="form.wtbh" style="width:59%;"></el-input> 
            </el-form-item>
            <el-form-item label="Submit Number">
                <el-input v-model="form.tjbh" style="width:59%;"></el-input>
            </el-form-item>
            <el-form-item label="Error Type">
                <el-select v-model="form.rtype" placeholder="Please select the error type">
                    <el-option label="Format Error" value="0"></el-option>
                    <el-option label="Result Error" value="1"></el-option>
                    <el-option label="Running Error" value="2"></el-option>
                    <el-option label="Time Overrun" value="3"></el-option>
                    <el-option label="Memory Overrun" value="4"></el-option>
                    <el-option label="Output Overrun" value="5"></el-option>
                    <el-option label="Compilation Error" value="6"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Problem Description">
                <el-input type="textarea" :rows="9" v-model="form.wtms" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save" class="fb" plain>Release Issues<i class="el-icon-upload el-icon--right"></i> </el-button>
            </el-form-item>
        </el-form>
    </div>
    <Time ref="hello"></Time>
</div>
</template>

<script>
import Time from './Time'
export default {
    name: "Forhelp",
    data() {
        return {
            form: {
                stdnb: '',
                wtbh: '',
                tjbh: '',
                rtype: '',
                wtms: '',
            }
            
        }
    },
    components:{
        Time
    },
    methods: {
        save(e) {
            if(!/^2[1234567890]\d{8}$/.test(this.form.stdnb)){
            this.$message({
            message: 'Please enter the correct student number',
            type: 'warning'
            });
            return;
            }   
            else if(!this.form.stdnb||!this.form.wtbh||!this.form.tjbh||!this.form.rtype||!this.form.wtms){
            this.$message({
                    message: 'Please enter the complete information',
                    type: 'warning',
                    duration: 1500,
                })
            }
            else{
            let newQuestion={
                    number:this.form.rtype,
                    create_time:this.$refs.hello.nowDate,
                    questionid: this.form.wtbh,
                    tjbh: this.form.tjbh,
                    wtms: this.form.wtms,
                    rtype: this.form.rtype,
                    // resolution_status:'',
                    // Problem_classification:'',
                    // Code_type:'',
                    count: 5,
                    stdnb: this.form.stdnb,
                    create_week1time:this.$refs.hello.nowWeek,
            }
            this.$axios.post('http://192.168.1.101:8000/questions/',newQuestion)
            .then(function (data) {
                    console.log(data);
                }),
            e.preventDefault();
                this.$message({
                    message: 'Submitted Successfully',
                    type: 'success',
                    duration: 1500,
                })
            }
            e.preventDefault();
        },

    }
}
</script>

<style scoped>
.qz{
    position: fixed;
    top: 51px;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    zoom: 1;
    background-color: #fff;
    background: url(../assets/wallhaven-eovx8k.png) no-repeat;
    background-size: 100% 100%;
}
.quelist {
    width: 600px;
    height: 600px;
    position: relative;
    margin:0px auto;
     background-color:#dce7f39c;
    padding: 12px 12px;
    border-radius: 20px;
     box-shadow: 9px 9px 12px rgb(87, 87, 87);
}

.fb {
    display: block;
    margin: 11px 50%;
    
}

.farm {
    position: relative;
    width: 60%;
    margin: 50px auto;
    margin-left: 15px;
}

p {
    /* text-align: center;
    line-height: 40px;*/
    display: block;
    position: relative;
     margin: 17px auto;
}

.n {
    margin-left: 40px;
}

a {
    text-decoration: none;
    font-size: 16px;
    margin-right: 28px;
    color:whitesmoke;
    font-weight: 520;
}
.n:hover {
    color: rgb(243, 152, 152);
}
</style>
