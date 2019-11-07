import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue'
import Vuelidate from 'vuelidate';
import CompanyData from '@/pages/CompanyData';

/** Font Awesome (to remove warnings of <fa-icon>) */
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faSearch as faSearchSolid, faAngleDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// library.add(faSearchSolid, faAngleDown, faMapMarkerAlt);
// Vue.component('FaIcon', FontAwesomeIcon);
//////

Vue.use(Vuelidate)

describe('CompanyData testings', () => {

    it('checks if inputs have correct values', () => {
        const wrapper = mount(CompanyData)
        wrapper.setData({
            ciaName: 'Company Data',
            ciaSpend: '150',
            ciaSpenAbility: '20000'
        })
        expect(wrapper.vm.$v.$invalid).toBeFalsy()
    })

    xit('checks if error classes are added in inputs', () => {
        const wrapper = mount(CompanyData)
        wrapper.setData({
            ciaName: '',
            ciaSpend: '111',
            ciaSpenAbility: '152-153'
        })
        const input = wrapper.find('span')
        console.log('input', input)
        // expect(wrapper.vm.$v.$invalid).toBeFalsy()
        expect(wrapper.find('.error')).toBeTruthy()
    })
})