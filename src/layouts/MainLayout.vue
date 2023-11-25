<template>
  <q-layout view="hHh Lpr lFf">

    <HeaderCommponent @toggleLeftDrawer="toggleLeftDrawer"></HeaderCommponent>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-dark" :width="250">
      <q-list>
        <SidebarLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
      <q-separator inset color="white" class="q-mt-sm" />
      <q-list>
        <q-item-label header class="text-white"> Projects </q-item-label>
        <SidebarLink v-for="pr in projects" :key="pr.id" :title="pr.title" :link="`/project/${pr.id}`"
          :icon="'check_box_outline_blank'" :color="pr.color" />
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
import { useStore } from 'src/store';
import { mapActions, mapState } from 'vuex';
import SidebarLink from 'src/components/shared/SidebarLink.vue';
import HeaderCommponent from 'src/components/shared/HeaderCommponent.vue';

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
    HeaderCommponent
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = useStore()

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      store
    };
  },
  computed: {
    ...mapState({
      projects: (state: any) => state.project.projects
    })
  },
  async mounted() {
    await this.store.dispatch('project/getMyProjects')
    await this.store.dispatch('user/getMe')
  }
});
</script>