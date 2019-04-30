import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ant from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import './assets/css/common.css'
import container  from './components/container'
import systemContent  from './components/systemContent'
import deleteBtn  from './components/btn-delete'
import search  from './components/search'
import edit  from './components/edit'
import deleteIcon  from './components/deleteIcon'

Vue.component("container",container)
Vue.component("systemContent",systemContent)
Vue.component("btn-delete",deleteBtn)
Vue.component("search",search)
Vue.component("edit",edit)
Vue.component("deleteIcon",deleteIcon)

Vue.config.productionTip = false;
Vue.use(ant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
