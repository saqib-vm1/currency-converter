<template>
    <input
        class="py-2 px-4 border w-64 text-2xl font-light text-slate-700" 
        :type="type" 
        :value="value" @input="handleInput"
        :name="name" />
</template>

<script lang="ts" setup>
    import { defineProps, PropType } from 'vue';

    defineProps({
        type: {
            type: String as PropType<string>
        },
        value: {
            required: true,
            type: String as PropType<string>
        },
        name: {
            required: true,
            type: String as PropType<string>
        }
    })

    const emit = defineEmits(['handleChange']);

    function handleInput(e: Event) {
        emit('handleChange', e)      
    }


</script>