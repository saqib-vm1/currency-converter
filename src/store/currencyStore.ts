import { defineStore } from "pinia"
import { ref, computed  } from 'vue'
import { currenciesList } from "./constants"
import Currency from "@/types/currency"


export const useCurrencyStore = defineStore('currency', () => {
    const currencies = ref<Currency[]>(currenciesList)

    const select1 = ref('indianRupee')
    const select2 = ref('usDollar')
    const input1 = ref('')
    const input2 = ref('')

    const selectValue1 = computed(() => select1)
    const selectValue2 = computed(() => select2)
    const inputValue1 = computed(() => input1)
    const inputValue2 = computed(() => input2)

    function updateStore(values: {select1: string, select2: string, input1: string, input2: string}) {
        select1.value = values.select1,
        select2.value = values.select2,
        input1.value = values.input1,
        input2.value = values.input2
    }
    
    
    return { selectValue1, selectValue2, inputValue1, inputValue2, currencies, updateStore }
})