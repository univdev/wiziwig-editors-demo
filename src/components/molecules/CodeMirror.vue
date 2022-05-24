<template>
  <code-mirror
    ref="editor"
    :value="value"
    :options="option"
    @input="onUpdate"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string>,
      required: false,
      default: null,
    },
    options: {
      type: Object as PropType<object>,
      required: false,
      default: () => ({
          origLeft: null,
          connect: 'align',
          mode: 'text/html',
          lineNumbers: true,
          collapseIdentical: false,
          highlightDifferences: true
      }),
    },
  },
  emits: ['input'],
  setup(props, { emit }) {
    const editor = ref();
    const option = computed(() => {
      const { value, options } = props;
      return {
        ...options,
        value,
      };
    });
    const onUpdate = (value: string) => {
      emit('input', value);
    };
    return {
      editor,
      option,
      onUpdate,
    };
  },
});
</script>
