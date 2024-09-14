import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import toast from 'react-hot-toast'

export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Token = ''
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    return data
  },
  (error: AxiosError) => {
    const data = error.response?.data as ApiResponse
    toast.error(data.message)
    return Promise.reject(error)
  },
)

async function request<T = any, R = ApiResponse<T>>(config: AxiosRequestConfig): Promise<R> {
  // 不传则默认为post
  config.method ??= 'post'
  return instance.request(config)
}

export default request
