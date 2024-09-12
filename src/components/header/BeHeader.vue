<template>
  <header :class="['header', direction]">
    <be-button variant="primary" size="s"></be-button>
  </header>
</template>

<script setup lang="ts">
import {HeaderProps} from "./header.interface";
import BeButton from "@/components/button/BeButton.vue";

defineProps<HeaderProps>()
</script>

<style scoped>
.header {
  padding: 10px;
  background-color: #818080;
}
</style>
