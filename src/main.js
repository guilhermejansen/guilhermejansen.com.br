import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    document.title = "Guilherme Jansen - Web Developer";
  }
}).$mount('#app')
