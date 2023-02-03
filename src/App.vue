<template>
  <header class="flex shadow-md p-3">
    <h1 class="text-3xl text-slate-700">Currency Converter App</h1>
  </header>
  <main class="flex justify-center items-center border border-red-100 p-10 w-full max-w-xl mx-auto">
    <!-- Input One -->
    <div>
      <SelectInput :value="selectValue1" @handleChange="handleChange" name="select1">
        <SelectOption v-for="currency in currencies" :label="currency.label" :value="currency.value" />
      </SelectInput>
      <Input type="number" :value="inputValue1" @handleChange="handleChange" name="input1" />    
    </div>

    <!-- Two Way Icon -->
    <div class="flex-col mb-1 px-2">
      <div class="">&rarr;</div>
      <div class="">&larr;</div>
    </div>
    
    <!-- Input Two -->
    <div>
      <SelectInput :value="selectValue2" @handleChange="handleChange" name="select2">
        <SelectOption v-for="currency in currencies" :label="currency.label" :value="currency.value" />
      </SelectInput>
      <Input type="number" :value="inputValue2" @handleChange="handleChange" name="input2" />
    </div>
  </main>
</template>

<script lang="ts" setup>
  import SelectInput from './components/SelectInput.vue'
  import SelectOption from './components/SelectOption.vue';
  import Input from './components/Input.vue';
  import { useCurrencyStore } from './store/currencyStore';
  import { storeToRefs } from 'pinia';
  import { CurrencyState} from "@/types/currency"
  import { dollarTo } from './store/constants';
  const { selectValue1, selectValue2, inputValue1, inputValue2, currencies } = storeToRefs(useCurrencyStore());
  const { updateState } = useCurrencyStore();
  
  function handleChange(e: Event) {
    const target = (e.target as HTMLInputElement);
    const tempState: CurrencyState = {
      select1: selectValue1.value,
      select2: selectValue2.value,
      input1: inputValue1.value,
      input2: inputValue2.value
    }
    tempState[target.name as keyof typeof tempState] = target.value;
    // calculating currency value
    if(target.name === 'select1' || target.name === 'input1') {
        const dollarValue = ((1 / dollarTo[tempState.select1]) * +tempState.input1);
        const currencyValue = dollarValue * dollarTo[tempState.select2];
        
        tempState.input2 = currencyValue.toFixed(2);
    } else if(target.name === 'select2' || target.name === 'input2') {
      const dollarValue = ((1 / dollarTo[tempState.select2]) * +tempState.input2);
        const currencyValue = dollarValue * dollarTo[tempState.select1];
        
        tempState.input1 = currencyValue.toFixed(2);
    }
    // updating store
    updateState(tempState)
  }
</script>

<style>

</style>
