<template>
  <toast-editor
    :initial-value="value"
    @beforePreviewRender="onChangeText"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  emits: ['input'],
  setup(_, { emit }) {
    const onChangeText = (value: string) => {
      emit('input', value);
    };
    return {
      onChangeText,
    };
  },
});
</script>
