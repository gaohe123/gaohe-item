import request from './request'

export const login = (model) =>
  request.post(
    // eslint-disable-next-line
    `login?username=${model.username}&password=${model.password}&code=${model.code}&token=${model.token}`
  )

export const coid = () => request.get('captcha')
// eslint-disable-next-line
export const list = () => request.get(`sys/menu/nav`)
