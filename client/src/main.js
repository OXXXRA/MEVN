import Vue from 'vue'
import App from './App.vue'
import router from '../router/index'
import VueRouter from "vue-router";
import bookList from "./components/bookList";
import Header from './components/header';
import Footer from "@/components/footer";
import bookItem from "@/components/bookItem";
import createItem from "@/components/createItem";
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('createItem', createItem)
Vue.component('bookList', bookList)
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('bookItem', bookItem)
new Vue({
  render: h => h(App),
  router

}).$mount('#app')


