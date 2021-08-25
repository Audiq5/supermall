import axios from "axios";

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })
 
  // 2.axios拦截器
  instance.interceptors.request.use(config => {
    return config
  },err => {
    // console.log(err);
  });

  // instance.interceptors.response

  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })


// 3最终方案 :发送真正的网络请求

return instance(config)






// 发送网络请求
// instance(config)
//   .then(res => {
//     console.log(res);
//     success(res)
//   })
//   .catch(err => {
//     console.log(err);
//     failure(err)
//   });

}