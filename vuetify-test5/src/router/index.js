import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyProject from '../views/MyProject.vue'
import Team from '../views/Team.vue'
import Education from '../views/Education.vue'
import GradUation from '../views/GradUation.vue'
import RpsDetail from '../views/RpsDetail.vue'
import ShoppingDetail from '../views/ShoppingDetail.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Profile from '../views/Profile.vue'
import Grade from '../views/Grade.vue'
import Skill from '../views/Skill.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myproject',
    name: 'MyProject',
    component: MyProject
    
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
    
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
    
  },
  {
    path: '/graduation',
    name: 'GradUation',
    component: GradUation
    
  },
  {
    path: '/rpsdetail',
    name: 'RpsDetail',
    component: RpsDetail,
  },
  {
    path: '/shoppingdetail',
    name: 'ShoppingDetail',
    component: ShoppingDetail,
  },
  {
    path: '/moviedetail',
    name: 'MovieDetail',
    component: MovieDetail,

  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/grade',
    name: 'Grade',
    component: Grade
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
