import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex'
import Activities from './../components/Activities.vue';

const wrapper = shallowMount(Activities)

const localVue = createLocalVue()
localVue.use(Vuex)

const activityList = [
  { id: 1, date: 8, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
  { id: 2, date: 8, icon: '/assets/images/Company Page/content-delivery.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
  { id: 3, date: 8, icon: '/assets/images/Company Page/content-delivery.gif', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' }
]
const imgRegex = RegExp(/(\.png|\.gif|\.jpg)/)

let getters
let store
beforeEach(() => {
  
  getters = {
    date: () => 1,
    iconPNG: () => imgRegex.test(activityList[0].icon),
    iconJGP: () => imgRegex.test(activityList[1].icon),
    iconGIF: () => imgRegex.test(activityList[2].icon)
  }

  store = new Vuex.Store({
    getters
  })
})

describe('Activities', () => {

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="activity">')
  })

  it("expects Activities' prop data to be a number", () => {
    expect(typeof getters.date()).toEqual(typeof activityList[0].date)
  })

  it("expects Activities' prop icon to be a link to an image", () => {
    console.log(typeof wrapper.vm._props[0])
    expect(getters.iconJPG || getters.iconPNG || getters.iconGIF).toBeTruthy()
  })


})