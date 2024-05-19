<script setup lang="ts">
import { ref } from 'vue'
import { VBtn, VCol, VContainer, VRow } from 'vuetify/components'
import ModalComponent from './components/ModalComponent.vue'
const showModal = ref(false)
</script>

<template>
    <v-container class="h-screen fill-height d-flex justify-center align-center">
        <v-col>
            <v-row align="center" justify="center">
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" class="logo" alt="Vite logo" />
                    </a>
                    <a href="https://vuejs.org/" target="_blank">
                        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
                    </a>
                </div>
            </v-row>
            <v-row align="center" justify="center">
                <div class="text-h3 font-weight-bold font-italic text-blue-darken-1 pb-5">Vite + Vue</div>
            </v-row>
            <v-row align="center" justify="center">
                <v-btn prepend-icon="$vuetify" variant="tonal" @click="showModal = true"> Button </v-btn>
            </v-row>
        </v-col>

        <ModalComponent
            v-model:show="showModal"
            title="Título del Modal"
            content="Contenido del modal o cuadro de diálogo" />
    </v-container>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
