<style lang="less" scoped>
  .quill-editor-template::v-deep {
    padding: 16px;
    .ql-editor {
      min-height: 200px;
    }
  }
</style>

<template>
  <div class="quill-editor-template">
    <h1 class="title mb-2">Quill Editor</h1>
    <no-ssr>
      <organism-extend-quill-editor
        class="editor"
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
