import HomeView from '@/views/HomeView.vue';
import {createRouter , createWebHistory} from 'vue-router';
import JobsView from '@/views/JobsView.vue';
import JobView from '@/views/JobView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/jobs',
        name: 'JobsView',
        component: JobsView
    },
    {
        path: '/job/:id',
        name: 'Job',
        component: JobView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    }
    
  ]
});
export default router;

