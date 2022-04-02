import { createApp } from 'vue'
import App from './App.vue'
import oceanplugins from '../lib/oceancomp.es'
import './index.css'
import '../lib/style.css'

// import oceanPlugins from './ocean-plugins';
// oceanPlugins.alert('hello!')

createApp(App).use(oceanplugins).mount('#app')
