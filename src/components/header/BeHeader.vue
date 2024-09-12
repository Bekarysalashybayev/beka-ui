<template>
  <header :class="['header', direction]">
    <be-button variant="primary" size="s"></be-button>
  </header>
</template>

<script setup lang="ts">
import BeButton from "./button/BeButton.vue";

defineProps<{
  direction: 'left' | 'right'
}>()
</script>

<style scoped>
.header {
  padding: 10px;
  background-color: #818080;
}
</style>
