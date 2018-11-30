import axios from 'axios'

const ajax = ({url, method = 'POST', params = {}, emulateJSON = false, useLoadLayer = true, onUploadProgress = null, successCallback, errorCallback}) => {
  let reqConf = {
    method, url, useLoadLayer,
    cancelToken: new axios.CancelToken(function (cancel) {
      console.log('request is canceled')
      console.log(cancel)
    })
  }
  onUploadProgress && Object.assign(reqConf, onUploadProgress)
  if (method === 'POST' && emulateJSON) {
    params.emulateJSON = true
  }
  reqConf[method === 'POST' ? 'data' : 'params'] = params

  return axios(reqConf).then((response) => {
    if (response.status === 250) {
      location.href = '/'
      return false
    }
    let rspCode = response.data.code
    // console.log(rspCode);
    if (rspCode === '0') {
      successCallback && successCallback(response.data.data)
    } else {
      errorCallback && errorCallback(response)
    }
    return response
  }).catch((error) => {
    if (error.response) {
      errorCallback && errorCallback(error.response)
    } else {
      console.error(error)
    }
  })
}
const ajaxUpload = ({url, method = 'POST', params = new FormData(), useLoadLayer = true, successCallback, errorCallback}) => {
  let reqConf = {method, url, useLoadLayer}
  reqConf[method === 'POST' ? 'data' : 'params'] = Object.assign({}, {'fileData': params}, {'emulateFile': true})
  axios(reqConf).then((response) => {
    let rspCode = response.data.code
    if (rspCode === '0') {
      // 业务级成功
      successCallback && successCallback(response.data.data)
    } else {
      // 业务级失败
      errorCallback && errorCallback(response)
    }
  }).catch((error) => {
    if (error.response) {
      // 服务端异常（返回的 HTTP 状态码非 2xx）
      errorCallback && errorCallback(error.response)
    } else {
      // 客户端代码异常（request 预处理、 successCallback 执行报错）或 请求超时
      console.error(error)
    }
  })
}
export default {
  ajax,
  ajaxUpload
}
