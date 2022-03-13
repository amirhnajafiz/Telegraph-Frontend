import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from './router'
import store from './store'
import vueNats from 'vue-nats';

// creating a vue app
const app = createApp(App)
// router and store
app.use(router)
app.use(store)
// vue plugins
app.use(BootstrapVue)
app.use(IconsPlugin)
// app mounting
app.mount('#app')

// axios config
axios.defaults.headers.common['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// nats config
app.use(vueNats, {
    url: process.env.NATS_HOST,
    json: true, // use JSON data payload
    reconnect: false, // always reconnect
    maxReconnectAttempts: -1, // retry forever
    reconnectTimeWait: -1 // try to reconnect every second
});
