import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.timeout = process.env.VUE_APP_TIMEOUT

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = store.getters.token

//     return config
//   },
//   (error) => Promise.reject(error)
// )

export default axios
