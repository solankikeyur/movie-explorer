import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Favourites from "../views/Favourites.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/favourites", component: Favourites}
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;