<template>
  <code-mirror
    :options="option"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';

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
  setup(props) {
    const option = computed(() => {
      const { value, options } = props;
      return {
        ...options,
        value,
      };
    });
    return {
      option,
    };
  },
});
</script>
