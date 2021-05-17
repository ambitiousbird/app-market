import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import AboutUs from './components/AboutUs.vue';
import MarketingServices from './components/MarketingServices.vue';
import ConsultingServices from './components/ConsultingServices.vue';
import Clients from './components/Clients.vue';
import ContactUs from './components/ContactUs.vue';

const router = createRouter({
    history:createWebHistory(''),
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {el: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes:[
        {
            path:"/",
            component: Home
        },
        {
            path:"/about-us",
            component: AboutUs
        },
        {
            path:"/marketing-services",
            component:MarketingServices
        },
        {
            path:"/consulting-services",
            component: ConsultingServices
        },
        {
            path:"/clients",
            component: Clients
        },
        {
            path:"/contact",
            component: ContactUs
        }
    ]
});

createApp(App).use(router).mount('#app')
