import Vue from 'vue';
import { Editor, Viewer } from '@toast-ui/vue-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default () => {
  Vue.component('ToastEditor', Editor);
  Vue.component('ToastViewer', Viewer);
};
