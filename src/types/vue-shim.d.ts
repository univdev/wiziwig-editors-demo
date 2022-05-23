import { Framework } from 'vuetify';

declare module 'vue/types/vue' {
  interface CombinedVueInstance {
    $vuetify: Framework;
  }
}