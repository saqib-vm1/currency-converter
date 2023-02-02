<template>
    <select 
        class="border border-slate-500 bg-slate-100 py-2 px-4 outline-none text-gray-700 w-64"
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
        <slot></slot>
    </select>
</template>

<script lang="ts" setup>
    import { defineProps, defineEmits, PropType } from 'vue';

    defineProps({
        modelValue: {
            required: true,
            type: String as PropType<string>
        }
    })

    defineEmits(['update:modelValue'])
</script>