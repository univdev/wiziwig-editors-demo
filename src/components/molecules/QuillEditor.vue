<template>
  <quill-editor
    :value="value"
    @input="onInput"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from '@nuxtjs/composition-api';

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
    onMounted(() => {
      // initialize();
    });
    return {
      onInput,
    };
  },
});
</script>
