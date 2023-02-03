import { defineStore } from "pinia"
import { ref, computed, watchEffect, reactive  } from 'vue'
import { currenciesList } from "./constants"
import {Currency, CurrencyState} from "@/types/currency"


export const useCurrencyStore = defineStore('currency', () => {
    const currencies = ref<Currency[]>(currenciesList)

    const state: CurrencyState = reactive({
        select1: 'indianRupee',
        select2: 'usDollar',
        input1: '',
        input2: ''
    })

    const selectValue1 = computed(() => state.select1)
    const selectValue2 = computed(() => state.select2)
    const inputValue1 = computed(() => state.input1)
    const inputValue2 = computed(() => state.input2)

    function updateState(u_State: CurrencyState) {
        state.select1 = u_State.select1,
        state.select2 = u_State.select2,
        state.input1 = u_State.input1,
        state.input2 = u_State.input2
    }

    watchEffect(() => {
        console.log('watch --------------', state.select1, state.select2, state.input1, state.input2)
    })

    return { selectValue1, selectValue2, inputValue1, inputValue2, currencies, updateState }
})