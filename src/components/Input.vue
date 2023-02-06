<template>
    <input
        class="py-2 px-4 border border-gray-500 w-64 text-2xl font-light text-slate-700 dark:bg-slate-900 dark:text-slate-300" 
        :type="type" 
        :value="modelValue" @input="handleInput" />
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

    const emit = defineEmits(['update:modelValue', 'handleChange']);

    function handleInput(e: Event) {
        emit('update:modelValue', (e.target as HTMLInputElement).value)
        emit('handleChange')      
    }


</script>