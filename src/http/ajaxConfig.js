import axios from 'axios'
import URLSearchParams from 'url-search-params'
import {CHANGE_LOAD_SHOW_STATE} from '../store/mutation-types'
import store from '../store'
// ajax 封装
const ajaxConfig = (Vue) => {
  globalConfig(axios)
  transformRequest(axios)
  addRequestInterceptors(axios)
  addResponseInterceptors(axios)
  accessInVueInstance(Vue, axios)
}
// / Override timeout default for the library
// Now all requests will wait 10 seconds before timing out
const globalConfig = (axios) => {
  //设置超时时间 10秒钟
  axios.defaults.timeout = 10000
}

const transformRequest = (axios) => {
  axios.defaults.transformRequest = [function (data, headers) {
    // 忽略 非POST 请求
    if (data === undefined) {
      return
    }
    // data.emulateFile -> true配合后台上传文件，例如上传excel
    if (data.emulateFile) {
      headers['Content-Type'] = 'multipart/form-data;charset=UTF-8'
      return data.fileData
    }
    // emulateJSON => json json格式的参数 requestBody
    if (!data.emulateJSON) {
      headers['Content-Type'] = 'application/json;charset=UTF-8'
      console.log('!emulateJSON')
      return JSON.stringify(data)
    }
    // emulateJSON => x-www-form-urlencoded form表单 requestParams
    headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    let params = new URLSearchParams()
    Object.keys(data).forEach(function (key) {
      if (key !== 'emulateJSON') {
        params.append(key, data[key])
      }
    })
    return params
  }]
}

// intercept requests or responses before they are handled by then or catch
const addRequestInterceptors = (axios) => {
  axios.interceptors.request.use(function (config) {
    if (config.useLoadLayer) {
      store.commit('CHANGE_LOAD_SHOW_STATE', true)
    }
    return config
  }, function (error) {
    store.commit(CHANGE_LOAD_SHOW_STATE, false)
    return Promise.reject(error)
  })
}

// Add a response interceptor
const addResponseInterceptors = (axios) => {
  axios.interceptors.response.use(function (response) {
    console.log(response.onprogress)
    store.commit(CHANGE_LOAD_SHOW_STATE, false)
    return response
  }, function (error) {
    store.commit(CHANGE_LOAD_SHOW_STATE, false)
    return Promise.reject(error)
  })
}

const accessInVueInstance = (Vue, axios) => {
  Vue.prototype.$http = axios
}
export default {
  ajaxConfig
}
