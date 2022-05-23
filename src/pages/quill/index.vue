<template>
  <layout-quill-editor
    v-model="payload.text"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import LoremText from '../../data/lorem-text';

export default defineComponent({
  name: 'QuillEditor',
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

