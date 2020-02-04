import axios from 'axios'
const baseUrl = '/api'
export default function request(url, data = {}, method = "GET") {
 
  return new Promise((resolve, reject) => {
    let promise;
    if (method === "GET") {
      promise = axios.get(`${baseUrl}`+url, {
        params:data
      })
    } else {
      promise = axios.post(url,data)
    }

    promise.then(response => {
      console.log("请求成功")
      resolve(response.data)
    }).catch(error => {
        alert("请求失败"+error.msg)
      })



  })
}