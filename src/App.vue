<template>
  <div :class="themeMode">
    <div class="dark:bg-black h-screen">
      <header class="flex shadow-md p-3 dark:shadow-slate-700 justify-between items-center">
        <h1 class="text-3xl text-slate-700 dark:text-slate-400">Currency Converter App</h1>
        <button class="border px-3 py-1 bg-black text-slate-300 dark:bg-slate-100 dark:text-slate-700 rounded" @click="toggleThemeMode">{{ themeMode === 'dark' ? 'Light' : 'Dark' }}</button>
      </header>
      <main class="flex justify-center items-center border border-gray-900 dark:border-gray-500 p-20 w-full max-w-2xl mx-auto mt-5">
        <!-- Input One -->
        <div>
          <SelectInput v-model="select1" @handleChange="handleChange1">
            <SelectOption v-for="currency in currencies" :label="currency.label" :value="currency.value" />
          </SelectInput>
          <Input type="number" v-model="input1" @handleChange="handleChange1" />    
        </div>

        <!-- Two Way Icon -->
        <div class="flex-col mb-1 px-2 dark:text-slate-100">
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
    </div>
  </div>
  
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { dollarTo } from './store/constants';
  import SelectInput from './components/SelectInput.vue'
  import SelectOption from './components/SelectOption.vue';
  import Input from './components/Input.vue';
  import { useCurrencyStore } from './store/currencyStore';
  import { storeToRefs } from 'pinia';
  import { useThemeModeStore } from './store/themeMode'
  const { selectValue1, selectValue2, inputValue1, inputValue2, currencies } = storeToRefs(useCurrencyStore());
  const { updateStore } = useCurrencyStore();
  const { themeMode } = storeToRefs(useThemeModeStore())
  const { toggleThemeMode } = useThemeModeStore()

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
