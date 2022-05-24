<style lang="less" scoped>
  .markup-previewer {
    .previewer {
      overflow: auto;
    }
  }
</style>

<template>
  <v-dialog
    :value="visible"
    :max-width="500"
    @close="onClose"
  >
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <div
          class="previewer"
          v-html="html"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
  props: {
    visible: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
    html: {
      type: String as PropType<string>,
      required: false,
      default: null,
    },
    title: {
      type: String as PropType<string>,
      required: false,
      default: 'Markup',
    },
  },
  setup(_, { emit }) {
    const onClose = () => {
      emit('update:visible', false);
    };
    return {
      onClose,
    };
  },
});
</script>
