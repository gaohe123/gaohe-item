import request from './request'

export const login = (model) => request.post('login', model)

export const coid = () => request.get('captcha')
