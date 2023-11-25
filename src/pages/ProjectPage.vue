<template>
  <q-page>
    <div class="row items-center">
      <q-btn padding="lg" push :color="projectDetail?.color" />
      <h6 class="q-ma-none q-ml-lg">{{ projectDetail?.title }}</h6>
    </div>
    <q-separator color="dark" class="q-mt-md" />
    <div>
      <section-list :sections="projectDetail?.sections" :project-id="projectDetail?.id" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { mapState } from 'vuex';
import { useRoute } from 'vue-router';
import { useStore } from 'src/store';
import { Project } from 'src/models';
import SectionList from 'src/components/section/SectionList.vue';

export default defineComponent({
  components: {
    SectionList
  },

  setup() {
    const store = useStore()
    const route = useRoute()

    watch(
      () => route.params.id,
      async (id) => {
        await store.dispatch('project/getOne', id);
      }
    )

    return { store, route }
  },
  computed: {
    ...mapState({
      projectDetail: (state: any) => state.project.projectDetail as Project
    })
  },
  async mounted() {
    const id = this.$route.params.id
    await this.store.dispatch('project/getOne', id);
  },
});
</script>
