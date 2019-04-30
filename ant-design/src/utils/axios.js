import axios from "axios"
import Vue from "vue"

let apiHost=process.env.VUE_APP_APIHOST;

axios.defaults.baseURL = apiHost;
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use(function (config) {
    document.querySelector("#loading").style.display="block";
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    document.querySelector("#loading").style.display="none";
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    document.querySelector("#loading").style.display="none";
    return Promise.reject(error);
});


Vue.prototype.$axios=axios;
Vue.prototype.$get=axios.get;
Vue.prototype.$post=axios.post;
