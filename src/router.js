import { createWebHistory, createRouter } from 'vue-router';

// Components Import
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Use Named Routes
    {
      path: "/",
      component: App,
    },
    



    // { path: '/:notFound(.*)', component: NotFound } // L A T E R 
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exactActive",
  scrollBehaviour(_, _2, savedPosition) {
    // to, from, savedPosition
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
