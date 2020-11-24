import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Student from '@/components/Student'
import Forhelp from '@/components/Forhelp'
import Pspace from '@/components/Pspace'
import Questionbase from '@/components/Questionbase'
import Answer from '@/components/Answer'
import Logout from '@/components/Logout'
import Register from '@/components/Register'



Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/user', component: User },
        { path: '/student', component: Student },
        { path: '/forhelp', component: Forhelp },
        { path: '/pspace', component: Pspace },
        { path: '/quebase', component: Questionbase },
        { path: '/answer', component: Answer },
        { path: '/logout', component: Logout },
        { path: '/register', component: Register },












        // import metion4 from '@/components/metion4'
        // import metion1 from '@/components/metion1'
        // import metion2 from '@/components/metion2'
        // import metion3 from '@/components/metion3'
        // import metion12 from '@/components/metion12'
        // import Quecard from '@/components/Quecard'
        // {
        //     path: '/app4',
        //     name: 'metion4',
        //     component: metion4
        // },
        // {
        //     path: '/app1',
        //     name: 'metion1',
        //     component: metion1
        // },
        // {
        //     path: '/app2',
        //     name: 'metion2',
        //     component: metion2
        // },
        // {
        //     path: '/app3',
        //     name: 'metion3',
        //     component: metion3
        // },
        // {
        //     path: '/app12',
        //     name: 'metion12',
        //     component: metion12
        // },

        // { path: '/card', component: Quecard },
    ]
})