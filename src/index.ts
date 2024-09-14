import type { App } from 'vue';
import BeButton from './components/button';
import BeHeader from './components/header';

export {BeButton, BeHeader}

export default {
    install: (app: App<Element>) => {
        app.component('BeButton', BeButton);
        app.component('BeHeader', BeHeader);
    }
}
