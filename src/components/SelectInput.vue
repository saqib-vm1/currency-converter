<template>
    <select 
        class="border border-slate-500 bg-slate-100 py-2 px-4 outline-none text-gray-700 w-64"
        :value="value"
        @change="handleChange"
        :name="name"
    >
        <slot></slot>
    </select>
</template>

<script lang="ts" setup>
    import { defineProps, defineEmits, PropType,  } from 'vue';

    const props = defineProps({
        value: {
            required: true,
            type: String as PropType<string>
        },
        name: {
            required: true,
            type: String as PropType<string>
        }
    })

    const emit = defineEmits(['handleChange'])

    function handleChange(e: Event) {
        emit('handleChange', e);
    }
</script>


<!-- @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" -->