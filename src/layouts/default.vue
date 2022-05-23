<template>
  <v-app>
    <organism-app-bar
      :dark="environment.dark"
      :navigation="environment.navigation"
      @click:theme-button="onClickThemeButton"
      @click:navigation-button="onClickNavigationButton"
    />
    <organism-navigation-drawer
      :value="environment.navigation"
      :items="navigation.items"
    />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from '@nuxtjs/composition-api';
import { useEnvironment } from '../store/environment';
import { useNavigation } from '../store/navigation';

export default defineComponent({
  setup(_, { root }) {
    const navigation = useNavigation();
    const environment = useEnvironment();
    const onClickThemeButton = () => {
      environment.toggleDark();
    };
    const onClickNavigationButton = () => {
      environment.toggleNavigation();
    };
    watch(() => environment.dark, () => {
      root.$vuetify.theme.dark = environment.dark;
    });
    const detectDarkMode = (): boolean => {
      if (!window.matchMedia) return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };
    onMounted(() => {
      environment.setDark(detectDarkMode());
    });
    return {
      navigation,
      environment,
      detectDarkMode,
      onClickThemeButton,
      onClickNavigationButton,
    };
  },
});
</script>

