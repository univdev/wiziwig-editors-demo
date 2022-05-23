<style lang="less" scoped>
  .quill-editor-template {
    padding: 16px;
  }
</style>

<template>
  <div class="quill-editor-template">
    <h1 class="title mb-2">Quill Editor</h1>
    <no-ssr>
      <molecule-quill-editor
        :value="value"
        @input="onInput"
      />
    </no-ssr>
    <div
      class="previewer mt-2"
      v-html="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string>,
      required: false,
      default: null,
    },
  },
  emits: [
    'input',
  ],
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
