import { mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue'
import Vuex from 'vuex'
import Activities from '@/components/Activities'

/** Font Awesome (for warnings purposes) */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch as faSearchSolid, faAngleDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSearchSolid, faAngleDown, faMapMarkerAlt);
Vue.component('FaIcon', FontAwesomeIcon);


describe('CompanyPage', () => {
    const imgRegx = RegExp(/(.gif|.jpg|.png|.svg)\b/)
    const shallowActivities = shallowMount(Activities)


    it('is a Vue instance', () => {
        expect(shallowActivities.isVueInstance()).toBeTruthy()
    })

    it("has prop date of type number", () => {
        shallowActivities.setProps({
            date: typeof 8
        })
        expect(shallowActivities.vm.$props.date).toBe('number')
    })

    it("has prop text of type string", () => {
        shallowActivities.setProps({
            text: typeof 'Text'
        })
        expect(shallowActivities.vm.$props.text).toBe('string')
    })

    it("has a part of a link in prop icon", () => {
        shallowActivities.setProps({
            icon: '/assets/images/Company Page/content-delivery.png'
        })
        expect(imgRegx.test(shallowActivities.vm.$props.icon)).toBeTruthy()
    })
})