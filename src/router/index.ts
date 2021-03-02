import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Routes from "./routes";

const routes: Array<RouteRecordRaw> = Routes;

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
