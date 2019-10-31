// import mutations from './mutations'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { store } from '@/store/store.js'

describe('Vuex testings', () => {

    it('checks if date is of type number', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        expect(typeof store.state.activityList[0].date).toBe('number')
    })

    it('has the proper format for icon', () => {
        const imgRegx = RegExp(/(.gif|.jpg|.png|.svg)\b/)
        const localVue = createLocalVue()
        localVue.use(Vuex)
        expect(imgRegx.test(store.state.activityList[0].icon)).toBeTruthy()
    })

    it('checks if text is of type String', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        expect(typeof store.state.activityList[0].text).toBe('string')
    })
})

