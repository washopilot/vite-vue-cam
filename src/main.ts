import { createApp } from 'vue'

// Vuetify
import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'

// Components
import App from './App.vue'

const vuetify = createVuetify({
    directives
})

createApp(App).use(vuetify).mount('#app')
