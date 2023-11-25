<template>
    <q-list class="row q-pa-md q-gutter-xs">
        <SectionItem v-for="sec of sections" :key="sec.id" :section="sec" />
        <CreateSection :index="sections?.length" :project="projectId" />
    </q-list>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import CreateSection from './CreateSection.vue';
import SectionItem from './SectionItem.vue';
import { Section } from 'src/models';


export default defineComponent({
    components: {
        CreateSection,
        SectionItem
    },
    props: {
        sections: Object as () => Section[],
        projectId: String
    }
})
</script>
  