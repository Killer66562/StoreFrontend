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
    },
    {
        path: "/register",
        component: () => import('../views/RegisterPageView.vue')
    },
    {
        path: "/login",
        component: () => import('../views/LoginPageView.vue')
    },
    {
        path: "/user",
        children: [
            {
                path: "store",
                component: () => import('../views/UserStorePageView.vue')
            },
            {
                path: "create-store",
                component: () => import('../views/UserCreateStoreView.vue')
            }
        ]
    }
];

const options: RouterOptions = {
    history: createWebHashHistory(),
    routes: routes
}

export const router = createRouter(options);