<style lang="less" scoped>
  .code-mirror-editor {
    padding: 16px;
    .github-button {
      position: fixed;
      right: 20px;
      bottom: 20px;
    }
  }
</style>

<template>
  <div class="code-mirror-editor">
    <h1 class="title mb-2">CodeMirror Editor</h1>
    <no-ssr>
      <organism-extend-code-mirror
        :value="value"
      />
    </no-ssr>
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
  setup() {
    const onClickGithubButton = () => {
      window.open(process.env.CODE_MIRROR_REPOSITORY_URI);
    };
    return {
      onClickGithubButton,
    };
  },
});
</script>

