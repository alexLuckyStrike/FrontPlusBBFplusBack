// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Global Store'
    }),
    actions: {
        increment() {
            this.count++
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2
    }
})