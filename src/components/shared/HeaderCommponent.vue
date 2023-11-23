<template>
    <q-header elevated class="bg-dark q-pa-xs">
        <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="changeDrawerMenu" />

            <q-toolbar-title>
                <q-btn color="dark" rounded style="border:1px solid #ffffff86">
                    <q-icon name="add" color="red" /> Create
                    <q-menu anchor="top right" self="top left">
                        <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                                <q-item-section style="display: flex;">
                                    <q-icon name="check_circle" /> Task
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>
                                    <q-icon name="article" />
                                    Project
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>
                                    <q-icon name="chat_bubble_outline" />
                                    Message
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
            </q-toolbar-title>

            <q-btn round>
                <router-link to="/profile/1">
                    <q-avatar size="42px">
                        <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                    </q-avatar>
                </router-link>
            </q-btn>
        </q-toolbar>
    </q-header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

    methods: {
        changeDrawerMenu() {
            this.$emit('toggleLeftDrawer')
        }
    }
})
</script>