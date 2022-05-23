<template>
  <div class="extend-quill-editor">
    <molecule-quill-editor
      :value="value"
      @input="onInput"
    />
    <div class="d-flex mt-2 align-center justify-end">
      <v-btn
        @click="onShowHTMLEditor"
      >
        HTML
      </v-btn>
    </div>
    <molecule-markup-editor
      :visible.sync="isVisibleMarkupEditor"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api';

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string>,
      required: false,
      default: null,
    },
  },
  setup(_, { emit }) {
    const isVisibleMarkupEditor = ref(false);
    const onInput = (value: string) => {
      emit('input', value);
    };
    const onShowHTMLEditor = () => {
      isVisibleMarkupEditor.value = true;
    };
    return {
      isVisibleMarkupEditor,
      onInput,
      onShowHTMLEditor,
    };
  },
});
</script>

