<script setup lang="ts">
import Camera from 'simple-vue-camera'
import { VBtn, VCard, VCardActions, VCardText, VCardTitle, VDialog } from 'vuetify/components'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    show: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['update:show'])

const closeModal = () => {
    emit('update:show', false)
}
</script>

<template>
    <v-dialog v-model="props.show" max-width="390">
        <v-card>
            <v-card-title class="text-h4">{{ props.title }}</v-card-title>
            <v-card-text>{{ props.content }}</v-card-text>
            <div class="px-6">
                <camera :resolution="{ width: 200, height: 180 }"></camera>
            </div>
            <v-card-actions class="pa-6">
                <v-btn variant="tonal" @click="closeModal">Cerrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
