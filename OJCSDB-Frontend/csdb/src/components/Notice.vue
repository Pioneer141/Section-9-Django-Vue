<template>
<div>
    <el-button plain @click="open1">
        Someone posted
    </el-button>
    <el-button plain @click="open2">
        Someone answered
    </el-button>
</div>
</template>

<script>
export default {
    name: "Notice",
    methods: {
        open1() {
            this.$notify({
                title: 'New Issues',
                message: '20191100xx posted a question 841454',
                offset: 50,
                duration: 5500,
            });
        },

        open2() {
            this.$notify({
                title: 'Congratulations',
                message: '20191100XX solved the problem 814561 and got 5 points',
                offset: 50,
                duration: 5500,
            });
        }
    }
}
</script>
