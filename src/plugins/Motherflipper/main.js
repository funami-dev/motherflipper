import Motherflipper from './index';

const MotherflipperPlugin = {
  install(Vue) {
    Vue.component('Motherflipper', Motherflipper);
  }
};

export default MotherflipperPlugin;
