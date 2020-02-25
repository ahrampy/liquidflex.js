import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// module.exports = {
//   devServer: {
//     hot: false,
//     liveReload: true
//   }
// };

new Vue({
  render: h => h(App),
}).$mount('#app')
