<template>
    <input
        class="py-2 px-4 border w-64 text-2xl font-light text-slate-700" 
        :type="type" 
        :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<script lang="ts" setup>
    import { defineProps, PropType } from 'vue';

    defineProps({
        type: {
            type: String as PropType<string>
        },
        modelValue: {
            required: true,
            type: String as PropType<string>
        }
    })

    defineEmits(['update:modelValue']);


</script>