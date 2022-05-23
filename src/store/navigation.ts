import { defineStore } from "pinia";
import { reactive } from '@nuxtjs/composition-api';

export type NavigationItem = {
  name: string;
  link: string;
};

export const useNavigation = defineStore('navigation', () => {
  const items: NavigationItem[] = reactive([
    { name: 'Welcome', link: '/' },
    { name: 'Quill Editor', link: '/quill' },
  ]);
  const addItem = (item: NavigationItem) => {
    items.push(item);
  };
  return {
    items,
    addItem,
  };
});