<template>
  <button :class="['button', `button_${variant}`, `button_${size}`]">Beka Button</button>
</template>

<script setup lang="ts">
import {PropType} from "vue";

defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'s' | 'm' | 'l'>,
    default: 'm',
  }
});
</script>

<style scoped>
.button {
  border: 0;
  --bg-color: #000;

  background-color: var(--bg-color);
  color: #fff;
  padding: 10px 18px;
  border-radius: 12px;
}

.button_secondary {
  --bg-color: rgba(1, 20, 65, 0.4);
}
</style>
