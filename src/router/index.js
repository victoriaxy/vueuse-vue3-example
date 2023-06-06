import { createRouter ,createWebHashHistory } from 'vue-router';
import Demo from '../components/demo.vue';

const routes = [
    { path: '/', component: Demo },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;