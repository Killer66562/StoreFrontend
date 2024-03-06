import { createRouter, RouteRecordRaw, RouterOptions, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import('../views/HomePageView.vue')
    },
    {
        path: "/items",
        children: [
            {
                path: ":id",
                component: () => import('../views/ItemDetailView.vue')
            }
        ]
    }
];

const options: RouterOptions = {
    history: createWebHashHistory(),
    routes: routes
}

export const router = createRouter(options);