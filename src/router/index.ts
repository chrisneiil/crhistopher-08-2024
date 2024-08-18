import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from "../layouts/MainLayout.vue";
import routesMainLayout from "./routesMainLayout.ts";

const routes = [
    {
        path: '/',
        component: MainLayout,  // Usar el Layout como contenedor
        children: [
            ...routesMainLayout
        ]
    },
    {
        path: '/:pathMatch(.*)*',  // Comodín para rutas no definidas
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue')
    }
    /*{
        path: '/about',
        name: 'About',
        // Esta es una carga diferida del componente (lazy-loaded)
        component: () => import('../views/About.vue')
    } */
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
