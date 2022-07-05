import { createStore } from 'vuex'

export default createStore({
  state: {
    coid: localStorage.getItem('url') || '',
    token: localStorage.getItem('token') || '',
    postyten: localStorage.getItem('postyten') || '',
    username: localStorage.getItem('username') || '',
    authorization: localStorage.getItem('authorization') || '',
    // data: JSON.parse(localStorage.getItem('data')) || [],
    router: JSON.parse(localStorage.getItem('router')) || []
  },
  getters: {},
  mutations: {
    setcoid(state, postyten) {
      localStorage.setItem('token', postyten.data.data.token)
      state.coid = postyten.data.data.captchaImg
      localStorage.setItem('url', state.coid)
    },
    Addroute(state, route) {
      if (route.path === '/login') {
        return false
      }
      if (route.path === '/') {
        return false
      }
      if (route.name === 'home') {
        return false
      }
      if (route.path === '') {
        return false
      }
      for (let index = 0; index < state.router.length; index++) {
        if (state.router[index].path === route.path) {
          return false
        }
      }
      state.router.push(route)
      localStorage.setItem('router', JSON.stringify(state.router))
    },
    deltargetName(state, targetNameVal) {
      // console.log(targetNameVal)
      if (targetNameVal === '/shouye') {
        return false
      }
      const index = state.router.findIndex((res) => {
        return res.path === targetNameVal
      })
      state.router.splice(index, 1)
      localStorage.setItem('router', JSON.stringify(state.router))
      // console.log(index)
    }
  },
  actions: {},
  modules: {}
})
