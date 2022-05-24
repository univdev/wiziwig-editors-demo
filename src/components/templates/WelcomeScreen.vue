<style lang="less" scoped>
  .welcome-screen {
    .github-button {
      position: fixed;
      right: 20px;
      bottom: 20px;
    }
  }
</style>

<template>
  <div class="welcome-screen d-flex align-center justify-center">
    <div class="messages">
      <h1>Welcome Editors</h1>
      <p class="center">
        에디터들을 모아 볼 수 있는 사이트입니다.
      </p>
    </div>
    <atom-github-button
      class="github-button"
      @click="onClickGithubButton"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const onClickGithubButton = () => {
      window.open(process.env.GITHUB_REPOSITORY_URI);
    };
    return {
      onClickGithubButton,
    };
  },
});
</script>

