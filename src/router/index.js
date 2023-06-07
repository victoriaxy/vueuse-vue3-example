import { createRouter ,createWebHashHistory } from 'vue-router';

export const menuroutes = [
    {
        path: '/state',
        meta: {title: 'State管理', iconname: 'shouye'},
        redirect: '/state/create-xxx',
        children: [
            {
                path: 'create-xxx',
                meta: {title: 'createXXX'},
                component: () => import("../components/state/create-xxx.vue") 
            },
            {
                path: 'use-xxx',
                meta: {title: 'useXXX'},
                component: () => import("../components/state/use-xxx.vue") 
            }
        ]
    }, {
        path: '/elements',
        meta: {title: 'elements管理', iconname: 'shouye'},
        redirect: '/elements/create-xxx',
        children: [
            {
                path: 'create-xxx',
                meta: {title: 'createXXX'},
                component: () => import("../components/state/create-xxx.vue") 
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