"use strict";

import { baseURL } from '../config';
import Vue from 'vue';
import axios from "axios";

const timeout = 1000 * 60;

// import vm from "@/main"
// const AUTH_TOKEN = 'Bearer '+localStorage.getItem('token')
// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = baseURL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  baseURL,
  timeout,
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //如果失败的状态码为401
    console.log(error);
    if(error.status === 401){
      // vm.$store.dispatch('logout');  //退出登录
      // vm.$router.push('/login'); //去登录页重新登录 
    }

    return Promise.reject(error);
  }
);

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;

// let loadToken = async () => {
//   let res = (await axios.get(`${baseURL}/user/token/`)).data;
//   if (res.ok) {
//     let token = res.token;
//     localStorage.setItem('token', token);
//     return token;
//   } else {
//     alert(res.msg);
//     throw new Error(res.msg);
//   }
// }
// let getToken = async () => {
//   let token = localStorage.getItem('token');
//   if (!/[a-z0-9]{32}/.test(token)) {
//     token = await loadToken();
//   }
//   return token;
// }

// async function initToken() {
//   let token = await getToken();
//   instance = axios.create({
//     baseURL,
//     timeout,
//     headers: {
//       'x-token': token
//     }
//   });
// }
// initToken();

// export async function resetToken() {
//   let token = await loadToken();
//   instance = axios.create({
//     baseURL,
//     timeout,
//     headers: {
//       'x-token': token
//     }
//   });
// }

// export default getAxios;
// export default instance;