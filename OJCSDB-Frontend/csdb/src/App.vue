<template>
<div id="app">
    <div class="dhl" v-if="isRouterAlive">
        <span class="bt">BUCT-CSDB</span>
        <a href="#/home">homepage</a>
        <a href="#/student">rank</a>
        <a href="#/user" v-if="$root.loginstate==0">login</a><a href="#/logout" v-if="$root.loginstate==1">logoff</a>
        <a href="#/pspace">mine</a>
        <span class="hi">Welcome:{{$root.id}}</span>
    </div>
    <router-view />
</div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    name: 'App',
    provide() {
        return {
            reloadAll: this.reloadAll
        }
    },
    data() {
        return {
            // whether:'',
            // userid: showStdnb,
            isRouterAlive: true
        }
    },
    // created(){
    //     this.isRouterAlive=true;
    // },
    methods: {
        reloadAll() {
            this.isRouterAlive = false
            console.log(this.isRouterAlive)
            this.$nextTick(() => {
                this.isRouterAlive = true;
            });
        }
    },
    computed: {
        showStdnb(){
            return Cookie.get('stdnb')
        }
    }
}
</script>

<style scoped>
@import "assets/dhl.css";
</style>
