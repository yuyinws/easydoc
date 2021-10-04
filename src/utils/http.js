import axios from 'axios'
import { Toast } from 'vant'

console.log(import.meta.env.MODE)
if (import.meta.env.MODE === "development") {
  axios.defaults.baseURL = '/api'
  console.log('asdasdqwqe')
}else{
  axios.defaults.baseURL = '/'
}

axios.interceptors.response.use(
  (res) => {
    let data = res.data
    const { state, subMsg, code } = data
    if ((state && state !== 200) || (code && code !== '0')) {
      Toast(`错误：${subMsg}`)
      return res.data
    }
    return data
  },
  (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 403:
          Toast({
            type: 'error',
            message: `错误：403`,
          })
          break
        case 404:
          Toast({
            type: 'error',
            message: `错误：404`,
          })
      }
    }
  }
)

export default function _axios(method, url, params) {
  let options = {
    method: method,
    url: url,
  }

  if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
    if (params) {
      options.data = params
    }
  }

  if (method === 'GET' || method === 'DELETE') {
    if (params) {
      options.params = params
    }
  }

  return axios(options).then(
    (res) => {
      return res
    },
    (error) => {
      return error
    }
  )
}
