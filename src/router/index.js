import VueRouter from 'vue-router'

import MainPage from '../components/main/MainPage'
import Layout from '../components/main/Layout'
import ToDo from '../components/todo/ToDo'

import NotFound from '../pages/404'

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'layout',
            component: Layout,
            children: [{
                    path: '/',
                    name: 'main',
                    component: MainPage
                },
                {
                    path:'/todo',
                    name:'todo',
                    component: ToDo
                }
            ]
        },
        {
            path: '*',
            name: 'notfound',
            component: NotFound
        }
    ]
})