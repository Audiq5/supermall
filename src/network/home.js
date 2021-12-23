
// 所有对首页的请求 

import {request} from './request'

// 获取首页的多个数据 getHomeMultidata

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

// 请求选项卡的展示的图片数据
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}  