<template>
<div style="height:100%;">
<p>
        <a class="n" href="#/quebase"><i class="el-icon-mouse"></i>Debug</a>
        <a class="y" href="#/forhelp"><i class="el-icon-s-opportunity">Help</i></a>
    </p>
    <div style="width:100%; height:100%;border:0px solid silver;position:relative;">
        <br><br><br><br><br><br>
        <Quecard class="wtk"></Quecard>
        <div v-if="index==1">
            <Sightdata class="tjt"></Sightdata>
        </div>
        <div v-if="index==0">
            <Sightdata2 class="tjt"></Sightdata2>
        </div>
        <div class="but">
            <el-button type="primary" plain @click="Week" size="mini" round>This week's data</el-button>
            <el-button type="primary" plain @click="Daily" size="mini" round>Today's data</el-button>
        </div>
        <Notice class="xx"></Notice><Time ref="hello"></Time>
        <br><br><br><br><br><br><br>
    </div>
    <Footer style="margin-top:21px;"></Footer>
</div>
</template>

<script>
import Footer from "./Footer";
import Quecard from "./Quecard";
import Notice from "./Notice";
import Sightdata from "./Sightdata";
import Sightdata2 from "./Sightdata2"
import Time from "./Time"
export default {
    name: "home",
    data() {
        return {
            user: [

            ],
            index: 1,
        }
    },
    components: {
        Footer,
        Quecard,
        Notice,
        Sightdata,
        Sightdata2,
        Time
    },
    methods: {
        Week() {
            this.index = 1;
        },
        Daily() {
            this.index = 0;
        }
    }
}
</script>

<style scoped>
.but {
    position: absolute;
    left: 45%;
    margin-top: 55px;
    color: #db6744;
}

.tjt {
    position: absolute;
    top: -20px;
    left: 30%;
    right: 50%;
}

.xx {
    position: absolute;
    top: 200px;
    right: 3%;
}

.wtk {
    margin-top: -70px;
    margin-left: 40px;
    position: relative;
}

.n {
    margin-left: 20px;
    margin-right: 40px;
}

p {
    /* text-align: center;
    line-height: 40px;*/
    display: block;
    position: relative;
    margin: 65px auto;
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
</style>
