<template>
  <div class="extend-code-mirror">
    <molecule-code-mirror
      :value="value"
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
  setup() {
    const isShowPreviewer = ref(false);
    const onClickGithubButton = () => {
      window.open(process.env.CODE_MIRROR_REPOSITORY_URI);
    };
    const onClickPreviewButton = () => {
      isShowPreviewer.value = true;
    };
    return {
      isShowPreviewer,
      onClickGithubButton,
      onClickPreviewButton,
    };
  },
});
</script>

