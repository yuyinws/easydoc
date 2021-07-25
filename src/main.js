import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';

VMdPreview.use(githubTheme)

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).use(Vant).use(VMdPreview).mount('#app')
