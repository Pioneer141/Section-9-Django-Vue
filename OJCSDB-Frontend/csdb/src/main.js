// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axios from 'axios'
// import global from './Global'

// Vue.prototype.GLOBAL = global
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
new Vue({
    router,
    data: function() {
        return {
            loginstate: 0,
            id: '',
        }
    },
    render: h => h(App)
}).$mount('#app');