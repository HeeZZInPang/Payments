import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

export const LocalDB = {
    page1: [
      { id: 1, date: "20.03.2020", category: "Food", value: 169 },
      { id: 2, date: "21.03.2020", category: "Navigation", value: 50 },
      { id: 3, date: "22.03.2020", category: "Sport", value: 450 }
    ],
    page2: [
      { id: 4, date: "23.03.2020", category: "Entertaiment", value: 969 },
      { id: 5, date: "24.03.2020", category: "Education", value: 1500 },
      { id: 6, date: "25.03.2020", category: "Food", value: 200 }
    ],
} 
 
export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
    },
    mutations: {
        setPaymentsListData (state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentsList (state, data) {
            state.paymentsList.push(data);
        },
        setCategories (state, payload) {
            state.categoryList = payload;
        },
        // editFirstPaymentItem(state, payload) {
        //     Vue.set(state.paymentsList, 0, payload);
        // }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getCategoryList: state => state.categoryList,
        getFullPaymentValue: state => {
        return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
    },
    actions: { 
        fetchData ({ commit }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const items = [];
                for (let i = 0; i < 100; i++) {
                    items.push({
                        date: Date.now(),
                        category: 'Food',
                        id: i,
                        value: i
                    })
                }
                resolve(items);
            }, 1500)
        })
        .then(res => {
            commit('setPaymentsListData', res)
        })
        },
        loadCategories ({ commit }) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Sport'])
              }, 1000)
            })
              .then(res => {
                commit('setCategories', res)
              })
        },
         
    },
})
