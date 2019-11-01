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
            ciaSpenAbility: '200000'
        })
        console.log('vuelidate', wrapper.vm.$v)
        expect(wrapper.vm.$v.$invalid).toBeFalsy()
    })

    it('checks if error classes are added in inputs', () => {
        const wrapper = mount(CompanyData)
        wrapper.setData({
            ciaName: '',
            ciaSpend: 'sss',
            ciaSpenAbility: '140000'
        })
        const input = wrapper.find('#ciaName')
        console.log('input', input.classes())
        // expect(wrapper.vm.$v.$invalid).toBeFalsy()
        expect(input.classes()).toContain('error')
    })
})