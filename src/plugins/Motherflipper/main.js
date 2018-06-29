import Motherflipper from "./index";
// import AdventureMapSidebar from './adventureMapSidebar.vue'; AdventureMapSidebar

// This is your plugin object. It can be exported to be used anywhere.
const MotherflipperPlugin = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue) {
        // We call Vue.mixin() here to inject functionality into all components.
        Vue.component("Motherflipper", Motherflipper);
        // Vue.component('AdventureMapSidebar', AdventureMapSidebar)

        Vue.mixin({
            // Anything added to a mixin will be injected into all components.
            // In this case, the mounted() method runs when the component is added to the DOM.
            // mounted() {
            //     console.log('Mounted!');
            // }
        });
    }
};

export default MotherflipperPlugin;