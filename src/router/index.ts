import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Notes from '@/views/Notes.vue';
import AddEditNote from '@/views/AddEditNote.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Notes',
    component: Notes,
  },
  {
    path: '/add',
    name: 'AddNote',
    component: AddEditNote,
  },
  {
    path: '/edit/:id',
    name: 'EditNote',
    component: AddEditNote,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
