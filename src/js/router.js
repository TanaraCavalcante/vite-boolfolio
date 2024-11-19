import { createMemoryHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppAbout from '../pages/AppAbout.vue'
import AppProjects from '../pages/AppProjects.vue'
import AppSingleProject from '../pages/AppSingleProject.vue'

const routes = [
  { path: '/', component: AppHome, name:"home"},
  { path: '/about', component: AppAbout, name:"about"},
  { path: '/projects', component: AppProjects, name:"projects"},
  { path: '/projects/:id', component: AppSingleProject, name:"singleProject"},

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export {router};