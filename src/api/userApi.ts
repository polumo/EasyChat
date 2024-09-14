import request from '@/lib/request'

export interface LoginParam {
  email: string
  password: string
}

export interface RegisterParam extends LoginParam {
  username: string
}

const loginUser = (data: LoginParam) => request<string>({ url: '/user/login', data })

const registerUser = (data: RegisterParam) => request({ url: '/user/register', data })

export { loginUser, registerUser }
