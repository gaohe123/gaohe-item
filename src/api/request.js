import axios from 'axios'
import store from '../store/index'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.timeout = process.env.VUE_APP_TIMEOUT

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = store.state.authorization
    // console.log(config.headers.Authorization)
    return config
  },
  (error) => Promise.reject(error)
)

export default axios
