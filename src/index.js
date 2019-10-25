import 'Styles/main.scss';
import Vue from 'vue';
import Home from 'Components/Home.vue';

/** Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch as faSearchSolid, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearchSolid, faAngleDown)
Vue.component('FaIcon', FontAwesomeIcon)
/** End Font Awesome */

new Vue({
  render: createElement => createElement(Home),
  el: '#app'
});