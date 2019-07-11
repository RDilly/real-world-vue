import Vue from 'vue'
import Router from 'vue-router'
import EventShow from './views/EventShow.vue'
import EventList from './views/EventList.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: 'user/:username',
      name: 'user',
      component: User,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/EventCreate.vue')
    },
    {
      path: '/about',
      redirect: { name: 'about' }
    }
  ]
})
