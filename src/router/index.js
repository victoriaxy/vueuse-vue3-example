import { createRouter ,createWebHashHistory } from 'vue-router';
import Demo from '../components/demo.vue';

export const menuroutes = [
    {
        path: '/state',
        meta: {title: 'State管理', iconname: 'shouye'},
        redirect: '/state/first1',
        children: [
            {
                path: 'first1',
                meta: {title: 'demo1'},
                component: Demo 
            },
            {
                path: 'first2',
                meta: {title: 'demo2'},
                component: Demo 
            }
        ]
    }
];

const routes = [
    { path: '/', redirect: '/state' },
    ...menuroutes
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;