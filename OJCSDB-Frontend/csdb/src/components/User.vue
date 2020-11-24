<template>
<div class="onlin">
    <el-form class="box" ref="form" :model="form">
        <h2>Crowdsourcing debugging</h2>
        <div class="sr">
            <div class="u">学号: <input type="text"  v-model="form.username" placeholder="username"></div>
            <div class="p">密码: <input type="password" v-model="form.password"  placeholder="password"></div>
            <button value="LOGIN" style="font-size:13px;" @click="submitd">LOGIN</button> <router-link to="/register" style="font-size: 10px;color: #db6744;margin-top">No account? To register</router-link>
        </div>
    </el-form>
</div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    name: "User",
    inject:['reloadALL'],
    data(){
        return{
            form:{
                username:'',
                password:'',
            },
            stdnb:'',
            
        }
    },
    methods: {
        submitd: function () {
             this.$axios.post("http://192.168.1.101:8000/users/login", {
              username: this.form.username,
              password: this.form.password,
            }).then(response => {
                console.log(response)
                if (response.data.status === 0) {
                    this.$message({
                    message:response.data.message,
                    type: 'success',
                    duration: 1000,
                })
                  this.$router.push({path: "/home"});
                  this.$root.loginstate=1;
                  this.$root.id=response.data.username;
                //   location.reload();
                } else {
                  this.$message({
                    message: 'Check that your account number and password are correct!',
                    type: 'error'
                  })
                }
        })
      }
    }
}
    
</script>

<style scoped>
@import "../assets/dl.css";
</style>
