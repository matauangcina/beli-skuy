import { createRouter, createWebHistory } from 'vue-router';
import GalleryView from '@/views/GalleryView.vue';
import CartView from '@/views/CartView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'gallery',
            component: GalleryView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        },
        // {
        //     path: '/',
        //     name: '404',
        //     component: NotFoundView
        // }
    ]
});

export default router;