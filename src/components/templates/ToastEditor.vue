<style lang="less" scoped>
  .toast-editor-template {
    padding: 16px;
    .github-button {
      position: fixed;
      right: 20px;
      bottom: 20px;
    }
  }
</style>

<template>
  <div class="toast-editor-template">
    <h1 class="title mb-2">Toast Editor</h1>
    <no-ssr>
      <molecule-toast-editor
        :value="value"
        @input="onChangeText"
      />
      <toast-viewer
        :initial-value="value"
      />
    </no-ssr>
    <atom-github-button
      class="github-button"
      @click="onClickGithubButton"
    />
  </div>
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
    const onClickGithubButton = () => {
      window.open(process.env.TOAST_REPOSITORY_URI);
    };
    const onChangeText = (value: string) => {
      emit('input', value);
    };
    return {
      onClickGithubButton,
      onChangeText,
    };
  },
});
</script>
