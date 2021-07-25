import axios from 'axios'
// const service = axios.create({
//   baseURL: 'easydoc',
//   timeout: 5000,
// })
// export default service

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
    res => {
        return res
    },
    error => {
        return error
    }
)
}
