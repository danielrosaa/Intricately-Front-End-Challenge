import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        sidebarItems: [
            {name: 'COMPANY DATA', route: '/companydata', isActive: false},
            {name: 'COMPANY TABLE', route: '/table', isActive: false},
            {name: 'COMPANY PAGE', route: '/', isActive: true}
        ],
        footerLinks: [
            {name: 'Pricing'},
            {name: 'Blog'},
            {name: 'Webinars'},
            {name: 'Events'},
            {name: 'Help Center'},
        ],
        legalInfos: [
            {name: 'Terms and Conditions'},
            {name: 'Privacy Policy'},
        ],
        activityList: [
            { id: 1, date: 8, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
            { id: 2, date: 10, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
            { id: 3, date: 20, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
            { id: 4, date: 25, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
            { id: 5, date: 28, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
            { id: 6, date: 35, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
            { id: 7, date: 35, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
            { id: 8, date: 35, icon: '/assets/images/Company Page/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
        ]
    },
    getters: {
        sidebarItems: state => {
            return state.sidebarItems
        },
        footerLinks: state => {
            return state.footerLinks
        },
        legalInfos: state => {
            return state.legalInfos
        },
        activityList: state => {
            return state.activityList
        },
    },
    mutations: {},
    actions: {}
})