import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/shouye',
    component: () => import('../views/home.vue'),

    children: [
      {
        path: '/sys/Users',
        name: 'User',
        meta: {
          title: '用户管理'
        },
        component: () => import('../views/private/chick/User.vue')
      },
      {
        path: '/sys/roles',
        name: 'Rolt',
        meta: {
          title: '角色管理'
        },
        component: () => import('../views/private/chick/Rolt.vue')
      },
      {
        path: '/sys/menus',
        name: 'Menu',
        meta: {
          title: '菜单管理'
        },
        component: () => import('../views/private/chick/Menu.vue')
      },

      {
        path: '/shouye',
        name: 'Shouye',
        meta: {
          title: '首页'
        },
        component: () => import('../views/private/Shouye.vue')
      },
      {
        path: '/tools',
        name: 'tools',
        component: () => import('../views/private/tools.vue')
      },
      {
        path: '/sys/dicts',
        name: 'Dict',
        meta: {
          title: '数字字典'
        },
        component: () => import('../views/private/chick/Dict.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
