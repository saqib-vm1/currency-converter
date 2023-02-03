import { defineStore } from "pinia"
import { ref  } from 'vue'
import { dollarTo, currenciesList } from "./constants"
import Currency from "@/types/currency"


export const useCurrencyStore = defineStore('currency', () => {
    const currencies = ref<Currency[]>(currenciesList)

    const select1 = ref('indianRupee')
    const select2 = ref('usDollar')
    const input1 = ref('')
    const input2 = ref('')


    function handleChange1() {
        const dollarValue = ((1 / dollarTo[select1.value]) * +input1.value);
        const currencyValue = dollarValue * dollarTo[select2.value];
        
        input2.value = currencyValue.toFixed(2);
    }

    function handleChange2() {
        const dollarValue = ((1 / dollarTo[select2.value]) * +input2.value);
        const currencyValue = dollarValue * dollarTo[select1.value];
        
        input1.value = currencyValue.toFixed(2);
    }
    
    
    return { select1, select2, input1, input2, currencies, handleChange1, handleChange2 }
})