import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Motherflipper from './index.vue';

Vue.config.productionTip = false;

const CustomElement = wrap(Vue, Motherflipper);

window.customElements.define('mother-flipper', CustomElement);
