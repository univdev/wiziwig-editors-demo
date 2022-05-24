<template>
  <layout-code-mirror-editor
    :value="payload.html"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CodeMirrorEditor',
  setup() {
    const payload = reactive({
      html: null,
    });
    onMounted(() => {
      payload.html = window.document.documentElement.innerHTML;
    });
    return {
      payload,
    };
  },
});
</script>
