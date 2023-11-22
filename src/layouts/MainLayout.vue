<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-dark q-pa-xs">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-btn color="dark" rounded style="border:1px solid #ffffff86">
            <q-icon name="add" color="red" /> Create
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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-dark" :width="250">
      <q-list>
        <SidebarLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
      <q-separator inset color="white" class="q-mt-sm" />
      <q-list>
        <q-item-label header class="text-white"> Projects </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SidebarLink from 'src/components/shared/SidebarLink.vue';

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    title: 'My tasks',
    icon: 'done',
    link: '/my-tasks',
  },
  {
    title: 'My Workspace',
    icon: 'group',
    link: '/workspace',
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    SidebarLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>