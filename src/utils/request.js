import axios from 'axios'

const service = axios.create({
    baseURL: "http://localhost:9001/",
    timeout: 3500,
})

// service.interceptors.request.use(config => {
//     return config;
// }, err => {
//     Promise.reject(err);
// })

// service.interceptors.response.use(response => {
//     if(response.status == 200) {
//         return Promise.resolve(response)
//     } else {
//         return Promise.reject("服务器请求失败")
//     }
// }, err => {
//     return Promise.reject(err);
// })

export default service;