// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import flexible from 'lib-flexible'
import Apis from './static/httpConfig'
import Cube from 'Cube'
import '../static/cube.min.css'
Vue.prototype.apis = Apis
Vue.config.productionTip = false
Vue.use(flexible)
Vue.use(Cube)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
