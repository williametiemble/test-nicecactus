import v from './plugins/VueRouter/ViewLoader.js'

export default [
  {
    path: '/',
    name: 'home',
    component: v('HomeView'),
  },
  {
    path: '/fight',
    name: 'fightMenu',
    component: v('FightMenuView'),
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: v('AvatarView'),
  },
]