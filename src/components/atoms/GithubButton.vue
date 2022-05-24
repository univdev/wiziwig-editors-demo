<template>
  <v-btn
    v-bind="{ ...$attrs }"
    fab
    @click="onClick"
  >
    <v-icon>mdi-github</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  emits: ['click'],
  setup(_, { emit }) {
    const onClick = () => {
      emit('click');
    };
    return {
      onClick,
    };
  },
});
</script>

