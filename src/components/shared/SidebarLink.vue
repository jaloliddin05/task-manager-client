<template>
  <q-item class="text-white" clickable @click="navigate">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section class="sidebar-title">
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },

  methods: {
    navigate() {
      this.$router.push(this.link)
    }
  }
});
</script>

<style scoped>
.sidebar-title {
  margin-left: -15px;
}
</style>
