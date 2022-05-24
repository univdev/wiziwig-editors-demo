import Vue from 'vue';
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/addon/merge/merge.css';
import 'codemirror/addon/merge/merge.js';

export default () => {
  Vue.component('CodeMirror', codemirror);
};