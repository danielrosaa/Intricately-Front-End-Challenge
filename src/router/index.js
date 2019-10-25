import Vue from 'vue';
import VueRouter from 'vue-router';
import CompanyData from 'Pages/CompanyData.vue';
import CompanyPage from 'Pages/CompanyPage.vue';

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', name: 'Company Page', component: CompanyPage },
      { path: '/companydata', name: 'Company Data', component: CompanyData },
      { path: '/table', name: 'Table', template: '<h2>Table</h2>' },
    ]
  })

  export default router;