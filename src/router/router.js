import Vue from 'vue';
import VueRouter from 'vue-router'

import Tab from './../views/Tab.vue';
import Home from './../views/Home.vue';
import List from './../views/List.vue';
import Login from './../views/Login.vue';
import Me from './../views/Me.vue';
import Article from './../views/Article.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
        path: '/',
        redirect: '/tab/home'
    },
    {
      path: '/tab',
      component: Tab,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/article/:id',
      component: Article,
    },
    {
      path: '/login',
      component: Login,
    }
  ]
})

export {
    router
}
