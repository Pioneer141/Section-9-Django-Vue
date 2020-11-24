<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      nowDate:"", // current date
      nowWeek:"",
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // year
      let month = date.getMonth() + 1; // month
      let day = date.getDate(); // day
      let week = date.getDay(); // week
      let weekArr = [ "0", "1", "2", "3", "4", "5", "6" ];
      let hour = date.getHours(); // hour
      hour = hour < 10 ? "0" + hour : hour; // If there is only one digit, zero is added before it
      let minute = date.getMinutes(); // minute
      minute = minute < 10 ? "0" + minute : minute; // If there is only one digit, zero is added before it
      let second = date.getSeconds(); // second
      second = second < 10 ? "0" + second : second; // If there is only one digit, zero is added before it
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
      this.nowWeek=weekArr[week];
    }
  },
  mounted() {
    this.currentTime();
  },
  // Destroy timer
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // Clear the time timer before the Vue instance is destroyed
    }
  }
};
</script>