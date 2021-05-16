import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import AboutUs from './components/AboutUs.vue';

const router = createRouter({
    history:createWebHistory(''),
    routes:[
        {
            path:"/",
            component: Home
        },
        {
            path:"/about-us",
            component: AboutUs
        }
    ]
});

createApp(App).use(router).mount('#app')
