import { createApp } from 'vue';
import { Quasar } from 'quasar';
import router from './router';

import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/line-awesome/line-awesome.css';
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css';

// A few examples for animations from Animate.css:
import '@quasar/extras/animate/fadeIn.css';
import '@quasar/extras/animate/fadeOut.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

import App from './App.vue';

createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    iconSet: quasarIconSet,
    config: {},
  })

  .use(router)
  .mount('#app');
