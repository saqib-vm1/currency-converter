<template>
    <option class="">{{ label }}</option>
</template>

<script lang="ts" setup>
    import { defineProps, PropType } from 'vue'

    defineProps({
        label: {
            required: true,
            type: String as PropType<string>
        },
        value: {
            required: true,
            type: String as PropType<string>
        }
    })
</script>