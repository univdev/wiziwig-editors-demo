<template>
  <layout-quill-editor
    v-model="payload.text"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'QuillEditor',
  setup() {
    const payload = reactive({
      text: '',
    });
    return {
      payload,
    };
  },
});
</script>

