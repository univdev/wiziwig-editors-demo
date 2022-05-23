<template>
  <v-dialog
    :value="visible"
    :max-width="500"
    @click:outside="onClose"
    @input="onUpdateVisible"
  >
    <v-card>
      <v-card-title>HTML</v-card-title>
      <v-card-text>
        <v-textarea
          :value="value"
          no-resize
          @change="onInput"
          @close="onClose"
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
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  emits: ['input', 'update:visible'],
  setup(_, { emit }) {
    const onClose = () => {
      emit('update:visible', false);
    };
    const onInput = (value: string) => {
      emit('input', value);
    };
    const onUpdateVisible = (flag: boolean) => {
      emit('input', flag);
    };
    return {
      onClose,
      onInput,
      onUpdateVisible,
    };
  },
});
</script>
