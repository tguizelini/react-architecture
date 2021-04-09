import axios from 'axios'
import StorageHelper from '../local/storage.helper'
import StorageKeys from '../local/storageKeys'
import BASE_URL from './base'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.request.use(
  config => {
    const token = StorageHelper.get(StorageKeys.TOKEN)
      
    if (token != null) config.headers.Authorization = `Bearer ${token}`

    return Promise.resolve(config)
  },
  error => {
    return Promise.reject(error)
  },
)

export default api
