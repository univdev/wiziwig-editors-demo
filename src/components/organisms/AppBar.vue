<style lang="less" scoped>

</style>

<template>
  <v-app-bar
    fixed
    app
  >
    <atom-navigation-button
      :active="navigation"
      @click="onClickNavigationButton"
    />
    <v-spacer />
    <atom-theme-button
      :dark="dark"
      @click="onClickThemeButton"
    />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    dark: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
    navigation: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  emits: [
    'click:theme-button',
    'update:dark',
    'click:navigation-button',
    'update:navigation',
  ],
  setup(props, { emit }) {
    const onClickNavigationButton = () => {
      emit('click:navigation-button', !props.navigation);
      emit('update:navigation', !props.navigation);
    };
    const onClickThemeButton = () => {
      emit('click:theme-button', !props.dark);
      emit('update:dark', !props.dark);
    };
    return {
      onClickNavigationButton,
      onClickThemeButton,
    };
  },
});
</script>

