<style lang="less" scoped>

</style>

<template>
  <layout-toast-editor
    v-model="payload.text"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import LoremText from '../../data/lorem-text';

export default defineComponent({
  setup() {
    const payload = reactive({
      text: LoremText.text,
    });
    return {
      payload,
    };
  },
});
</script>
