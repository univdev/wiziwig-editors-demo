<template>
  <v-btn
    text
    v-bind="{ ...$attrs }"
    @click="onClick"
  >
    <v-icon>
      mdi-menu
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    active: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  emits: ['click'],
  setup(_, { emit }) {
    const onClick = (event: Event) => {
      emit('click', event);
    };
    return {
      onClick,
    };
  },
});
</script>
