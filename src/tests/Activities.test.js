import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue'
import Vuex from 'vuex'
import CompanyPage from '@/pages/CompanyPage';
import Activities from '@/components/Activities'

/** Font Awesome (for warnings purposes) */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch as faSearchSolid, faAngleDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSearchSolid, faAngleDown, faMapMarkerAlt);
Vue.component('FaIcon', FontAwesomeIcon);

Vue.use(Vuex)

describe('CompanyPage', () => {
    const imgRegx = RegExp(/(.gif|.jpg|.png|.svg)\b/)
    const shallowCompanyPage = shallowMount(CompanyPage)
    const fullCompanyPage = mount(CompanyPage)
    const shallowActivities = shallowMount(Activities)
    const fullActivities = mount(Activities)


    it('is a Vue instance', () => {
        expect(shallowActivities.isVueInstance()).toBeTruthy()
    })

    it("has prop date of type number", () => {
        shallowActivities.setProps({
            date: typeof 8
        })
        expect(shallowActivities.vm.date).toBe('number')
    })

    it("has prop text of type string", () => {
        shallowActivities.setProps({
            date: typeof 8
        })
        expect(shallowActivities.vm.date).toBe('number')
    })

    it("has a part of a link in prop icon", () => {
        shallowActivities.setProps({
            icon: '/assets/images/Company Page/content-delivery.png'
        })
        expect(imgRegx.test(shallowActivities.vm.icon)).toBeTruthy()
    })
})