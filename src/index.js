import 'Styles/main.scss';
import Vue from 'vue';
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

new Vue({
  render: createElement => createElement(Home),
  el: '#app',
  router,
  store
})