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
  import SelectInput from './components/SelectInput.vue'
  import SelectOption from './components/SelectOption.vue';
  import Input from './components/Input.vue';
  import { useCurrencyStore } from './store/currencyStore';
  import { storeToRefs } from 'pinia';

  const { select1, select2, input1, input2, currencies } = storeToRefs(useCurrencyStore());
  const { handleChange1, handleChange2 } = useCurrencyStore();
  
</script>

<style>

</style>
