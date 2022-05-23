<style lang="less" scoped>

</style>

<template>
  <v-btn
    text
    v-bind="{ ...$attrs }"
    @click="onClick"
  >
    <v-icon
      v-if="!dark"
    >
      mdi-weather-sunny
    </v-icon>
    <v-icon
      v-else
    >
      mdi-weather-night
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    dark: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
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
