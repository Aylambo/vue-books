import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/home-page'
import aboutPage from '@/views/about-page'
import bookApp from '@/views/book-app'
import bookDetails from '@/views/book-details'
import bookEdit from '@/views/book-edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/about',
    component: aboutPage
  },
  {
    path: '/book',
    component: bookApp
  },
  {
    path: '/book/edit/:id?',
    component: bookEdit
  },
  {
    path: '/book/:id',
    component: bookDetails
  },
 
]

const router = new VueRouter({
  routes
})

export default router;
