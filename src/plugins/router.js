import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
// import Auth from "@/views/Auth";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: Home
        }
        // {
        //     path: "/auth",
        //     component: Auth
        // }
    ]
});

// import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/views/Home";

// const routes = [
//     {
//         path: "/",
//         name: "Home",
//         component: Home
//     },
//     {
//         path: "/todos",
//         name: "todos",
//         component: () => import("../views/Todos.vue")
//     },
//     {
//         path: "/auth",
//         name: "auth",
//         component: () => import("../views/Auth.vue")
//     }
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// });

// export default router;
