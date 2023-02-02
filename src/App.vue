<template>
  <header class="flex shadow-md p-3">
    <h1 class="text-3xl text-slate-700">Currency Converter App</h1>
  </header>
  <main class="flex justify-center items-center border border-red-100 p-10 w-full max-w-xl mx-auto">
    <div>
      <!-- Input One -->
      <SelectInput v-model="select1">
        <SelectOption v-for="currency in currencies" :label="currency" :value="currency" />
      </SelectInput>
      <Input type="number" v-model="input2" />    
    </div>

    <!-- Two Way Icon -->
    <div class="flex-col mb-1 px-2">
      <div class="">&rarr;</div>
      <div class="">&larr;</div>
    </div>
    
    <!-- Input Two -->
    <div>
      <SelectInput v-model="select2">
        <SelectOption v-for="currency in currencies" :label="currency" :value="currency" />
      </SelectInput>
      <Input type="number" v-model="input1" />
    </div>
  </main>
</template>

<script lang="ts" setup>
  import { ref, watchEffect } from 'vue'
  import SelectInput from './components/SelectInput.vue'
  import SelectOption from './components/SelectOption.vue';
  import Input from './components/Input.vue';

  const currencies = ref<string[]>(['US Dollar', 'Indian Rupee', 'European Euro'])


  const select1 = ref('Indian Rupee')
  const select2 = ref('US Dollar')
  const input1 = ref('')
  const input2 = ref('')

  watchEffect(() => {
    console.log(select1.value, select2.value)
  })
  
</script>

<style>

</style>
