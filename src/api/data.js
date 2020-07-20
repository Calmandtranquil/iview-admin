import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    // url: 'get_table_data',
    url: 'https://5ec8cf84-da9d-4275-a964-cb1175b14d85.bspapp.com/http/getall',
    method: 'get'
  })
}
export const updateData = () => {
  return axios.request({
    // url: 'get_table_data',
    url: 'https://5ec8cf84-da9d-4275-a964-cb1175b14d85.bspapp.com/http/goodsupdata',
    method: 'post'
  })
}

export const getUserTableData = () => {
  return axios.request({
    // url: 'get_table_data',
    url: 'https://5ec8cf84-da9d-4275-a964-cb1175b14d85.bspapp.com/http/getalluser',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'save_error_logger',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}

export const getTreeSelectData = () => {
  return axios.request({
    url: 'get_tree_select_data',
    method: 'get'
  })
}
