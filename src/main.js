// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'


Vue.use(VueRouter);

let routes = [
    {path: '/', component: Home},//path of root url
    {path: '/index', component: Home},
    {path: '/about', component: About}

];

//declaring the router; passing two parameters;route array and mode
let router =new VueRouter({
    routes,

    mode: 'history' //passed to prevent url having the # symbol
});


new Vue({
    el: '#app',

    template: '<App/>',

    components: {App},

    router //router added to Vue instance
}).$mount('#app');

Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
