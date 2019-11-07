import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue'
import Vuelidate from 'vuelidate';
import CompanyData from '@/pages/CompanyData';

Vue.use(Vuelidate)

describe('CompanyData testings', () => {

    it('checks if inputs have correct values', () => {
        const wrapper = shallowMount(CompanyData)
        wrapper.setData({
            ciaName: 'Company Data',
            ciaSpend: '150',
            ciaSpenAbility: '20000'
        })
        expect(wrapper.vm.$v.$invalid).toBeFalsy()
    })

    it('checks if error classes are added in inputs', () => {
        const wrapper = shallowMount(CompanyData)
        wrapper.setData({
            ciaName: '',
            ciaSpend: '111',
            ciaSpenAbility: '152-153',
            showError: true
        })
        expect(wrapper.find('#ciaName').classes()).toContain('error')
    })
})