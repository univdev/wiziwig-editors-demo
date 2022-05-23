<template>
  <quill-editor
    v-bind="{ ...$attrs }"
    :value="value"
    @input="onInput"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string>,
      required: false,
      default: null,
    },
  },
  setup(_, { emit }) {
    const onInput = (value: string) => {
      emit('input', value);
    };
    return {
      onInput,
    };
  },
});
</script>
