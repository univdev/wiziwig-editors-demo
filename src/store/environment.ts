import { defineStore } from 'pinia';
import { ref } from '@nuxtjs/composition-api';

export const useEnvironment = defineStore('environment', () => {
  const dark = ref(false);
  const setDark = (flag: boolean) => {
    dark.value = flag;
  };
  const toggleDark = () => {
    dark.value = !dark.value;
  };
  const navigation = ref(true);
  const setNavigation = (flag: boolean) => {
    navigation.value = flag;
  };
  const toggleNavigation = () => {
    navigation.value = !navigation.value;
  };
  return {
    dark,
    setDark,
    toggleDark,
    navigation,
    setNavigation,
    toggleNavigation,
  };
});