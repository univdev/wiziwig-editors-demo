<style lang="less" scoped>
  .quill-editor-template::v-deep {
    padding: 16px;
    .ql-editor {
      min-height: 200px;
    }
    .github-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
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
    <atom-github-button
      class="github-button"
      @click="onClickGithubButton"
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
    const onClickGithubButton = () => {
      window.open(process.env.QUILL_REPOSITORY_URI);
    };
    const onInput = (value: string) => {
      emit('input', value);
    };
    return {
      onClickGithubButton,
      onInput,
    };
  },
});
</script>
