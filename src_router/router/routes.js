import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import New from '../pages/new.vue'
import Messages from '../pages/messages.vue'
import MessageDetail from '../pages/messageDetail.vue'

export default [
    {
        path: '/about',
        component: About
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/new',
                component: New
            },
            {
                path: '/home/messages',
                component: Messages,
                children: [
                    {
                        path: '/home/messages/detail/:id',
                        component: MessageDetail,
                        props: route => ({id: route.params.id * 1})
                    }
                ]
            },
            {
                path: '',
                redirect: '/home/new'
            }
        ]
    },
    {
        path: '/',
        redirect: '/about'
    }
]
