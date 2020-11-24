<script>
export default {
    // inject:['reloadALL'],
    // data(){
    //     return{
    //     }
    // },
    created(){
    this.$root.loginstate = 0;
    console.log(this.$root.loginstate)
    this.$router.push({path: '/home'})
    location.reload()
    // this.reloadALL()
    }

    // location.reload();}
}
</script>