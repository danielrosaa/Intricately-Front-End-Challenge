import 'Styles/main.scss';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import router from 'Router/index';
import { store } from 'Store/store';
import Home from 'Pages/Home.vue';

/** Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch as faSearchSolid, faAngleDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSearchSolid, faAngleDown, faMapMarkerAlt);
Vue.component('FaIcon', FontAwesomeIcon);

/** Components */
import Activities from 'Components/Activities.vue';
Vue.component('Activities', Activities);
import Header from 'Components/Header.vue';
Vue.component('appHeader', Header);
import Footer from 'Components/Footer.vue';
Vue.component('appFooter', Footer);

Vue.use(Vuelidate)
new Vue({
  render: createElement => createElement(Home),
  el: '#app',
  router,
  store
})