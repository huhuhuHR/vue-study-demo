import {
  CHANGE_LOAD_SHOW_STATE,
  OPERATION_RESULT_HIDDEN,
  OPERATION_RESULT_SHOW
} from '../mutation-types'

const state = {
  isLoadLayer: false,
  userInfo: {
    userName: '',
    iconfont: '',
    password: ''
  }
}
const actions = {}
const getters = {
  isLoadLayer: state => {
    return state.isLoadLayer
  },
  operationInfo: state => state.operationInfo
}

const mutations = {
  [CHANGE_LOAD_SHOW_STATE] (state, isLoadLayer) {
    state.isLoadLayer = isLoadLayer
  },
  [OPERATION_RESULT_SHOW]: (state, value) => {
    state.operationInfo.flag = true
    state.operationInfo.iconfont = value.iconfont
    state.operationInfo.text = value.text
  },
  [OPERATION_RESULT_HIDDEN]: (state) => {
    state.operationInfo.flag = false
    state.operationInfo.iconfont = ''
    state.operationInfo.text = ''
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
