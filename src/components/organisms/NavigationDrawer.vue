<template>
  <v-navigation-drawer
    app
    fixed
    v-bind="{ ...$attrs }"
    :value="value"
    @input="onInput"
  >
    <v-list
      dense
      nav
    >
      <molecule-navigation-drawer-title />
      <v-divider />
      <v-list-item
        v-for="(item, key) in items"
        :key="key"
        :link="!!item.link"
        :to="item.link"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export type NavigationItem = {
  name: string;
  link: string;
};

export default defineComponent({
  props: {
    value: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
    items: {
      type: Array as PropType<NavigationItem[]>,
      required: false,
      default: () => [],
    },
  },
  setup(_, { emit }) {
    const onInput = (flag: boolean) => {
      emit('input', flag);
    };
    return {
      onInput,
    };
  },
});
</script>
