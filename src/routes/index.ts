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
                path: "orders",
                component: () => import('../views/UserOrdersPageView.vue')
            },
            {
                path: "create-store",
                component: () => import('../views/UserCreateStoreView.vue')
            },
            {
                path: "add-item",
                component: () => import('../views/UserStoreAddItemView.vue')
            },
            {
                path: "cart-items",
                component: () => import('../views/UserCartItemsView.vue')
            },
            {
                path: "buy-next-time-items",
                component: () => import('../views/UserBNTItemsPageView.vue')
            }
        ]
    },
    {
        path: "/admin",
        children: [
            {
                path: "cities",
                component: () => import('../views/AdminCityPage.vue')
            },
            {
                path: "districts",
                component: () => import('../views/AdminDistrictPage.vue')
            }
        ]
    }
];

const options: RouterOptions = {
    history: createWebHashHistory(),
    routes: routes,
}

const _router = createRouter(options);

export const router = _router;