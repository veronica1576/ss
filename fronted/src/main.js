import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import  {BootstrapVue, IconsPlugin, BootstrapVueIcons} from 'bootstrap-vue';

//Import Bootstrap and BootstraoVue CSS files (ordei is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const base = axion.create({
  baseURL: http://localhost:3000,

});


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

new Vue({
  created(){
    Aos.init();
  },
  router,
  render: h => h(App)
}).$mount('#app')
