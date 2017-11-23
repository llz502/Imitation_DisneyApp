import SG from '../components/SG'
import Movies from '../components/Movies'
import Video from '../components/Video'
import TV from '../components/TV'
import Characters from '../components/Characters'
import Games from '../components/Games'
import Apps from '../components/Apps'
import Products from '../components/Products'
import Events from '../components/Events'
import Parks from '../components/Parks'
import Login from '../components/Login'


export default [
  {
  path: '/SG',
  component: SG
  },
  {
  path: '/Movies',
  component: Movies
  },
  {
  path: '/Video',
  component: Video
  },
  {
  path: '/TV',
  component: TV
  },
  {
  path: '/Characters',
  component: Characters
  },
  {
  path: '/Games',
  component: Games
  },
  {
  path: '/Apps',
  component: Apps
  },
  {
  path: '/Products',
  component: Products
  },
  {
  path: '/Events',
  component: Events
  },
  {
  path: '/Parks',
  component: Parks
  },
  {
  path: '/Login',
  component: Login
  },
  { 
    path: '/', 
    redirect: '/SG' 
  }
]
