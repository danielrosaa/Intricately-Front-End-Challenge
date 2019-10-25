import Vue from 'vue';
import VueRouter from 'vue-router';
import CompanyData from 'Pages/CompanyData.vue';
import CompanyPage from 'Pages/CompanyPage.vue';

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', name: 'Home', component: CompanyPage },
      { path: '/companydata', name: 'Company Data', component: CompanyData }
    ]
  })

  export default router;