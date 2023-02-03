<template>
  <header class="flex shadow-md p-3">
    <h1 class="text-3xl text-slate-700">Currency Converter App</h1>
  </header>
  <main class="flex justify-center items-center border border-red-100 p-10 w-full max-w-xl mx-auto">
    <!-- Input One -->
    <div>
      <SelectInput v-model="select1" @handleChange="handleChange1">
        <SelectOption v-for="currency in currencies" :label="currency.label" :value="currency.value" />
      </SelectInput>
      <Input type="number" v-model="input1" @handleChange="handleChange1" />    
    </div>

    <!-- Two Way Icon -->
    <div class="flex-col mb-1 px-2">
      <div class="">&rarr;</div>
      <div class="">&larr;</div>
    </div>
    
    <!-- Input Two -->
    <div>
      <SelectInput v-model="select2" @handleChange="handleChange2">
        <SelectOption v-for="currency in currencies" :label="currency.label" :value="currency.value" />
      </SelectInput>
      <Input type="number" v-model="input2" @handleChange="handleChange2" />
    </div>
  </main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { dollarTo } from './store/constants';
  import SelectInput from './components/SelectInput.vue'
  import SelectOption from './components/SelectOption.vue';
  import Input from './components/Input.vue';
  import { useCurrencyStore } from './store/currencyStore';
  import { storeToRefs } from 'pinia';
  const { selectValue1, selectValue2, inputValue1, inputValue2, currencies } = storeToRefs(useCurrencyStore());
  const { updateStore } = useCurrencyStore();

  const select1 = ref(selectValue1.value)
  const select2 = ref(selectValue2.value)
  const input1 = ref(inputValue1.value)
  const input2 = ref(inputValue2.value)

  function handleChange1() {
      const dollarValue = ((1 / dollarTo[select1.value]) * +input1.value);
      const currencyValue = (dollarValue * dollarTo[select2.value]).toFixed(2);
      
      updateStore({
        select1: select1.value, 
        select2: select2.value, 
        input1: input1.value, 
        input2: currencyValue
      })
    }
    
    function handleChange2() {
      const dollarValue = ((1 / dollarTo[select2.value]) * +input2.value);
      const currencyValue = (dollarValue * dollarTo[select1.value]).toFixed(2);
      
      updateStore({
        select1: select1.value, 
        select2: select2.value, 
        input1: currencyValue, 
        input2: input2.value
      })
    }
</script>

<style>

</style>
