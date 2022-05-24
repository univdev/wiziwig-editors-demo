<template>
  <div class="extend-code-mirror">
    <molecule-code-mirror
      ref="editor"
      :value="value"
      @input="onInput"
    />
    <div class="d-flex mt-2 justify-end align-center">
      <v-btn
        @click="onClickPreviewButton"
      >
        Preview
      </v-btn>
    </div>
    <molecule-markup-previewer
      :visible.sync="isShowPreviewer"
      :html="value"
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
  emits: ['input'],
  setup(_, { emit }) {
    const editor = ref();
    const isShowPreviewer = ref(false);
    const onClickGithubButton = () => {
      window.open(process.env.CODE_MIRROR_REPOSITORY_URI);
    };
    const onClickPreviewButton = () => {
      isShowPreviewer.value = true;
    };
    const onInput = (value: string) => {
      emit('input', value);
    };
    return {
      editor,
      isShowPreviewer,
      onClickGithubButton,
      onClickPreviewButton,
      onInput,
    };
  },
});
</script>

