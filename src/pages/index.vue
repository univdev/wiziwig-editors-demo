<style lang="less" scoped>
  .index {
    width: 100%;
    height: 100%;
    .welcome-screen {
      height: 100%;
      text-align: center;
    }
  }
</style>


<template>
  <div class="index">
    <layout-welcome-screen
      class="welcome-screen"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'IndexPage',
});
</script>
