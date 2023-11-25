<template>
    <q-item class="section-box column">
        <div class="full-width row">
            <p class="section-title">{{ section?.title }}</p>
        </div>
        <div class="full-width section-body">
            <TaskList :tasks="section?.tasks" :section="section?.id" />
        </div>
    </q-item>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Section } from 'src/models';
import { useStore } from 'src/store';
import TaskList from '../task/TaskList.vue';

export default defineComponent({
    components: {
        TaskList
    },
    setup() {
        const store = useStore()

        return { store }
    },
    methods: {

    },
    props: {
        section: Object as () => Section
    }
});
</script>
  

<style scoped>
.section-box {
    width: 330px;
    border: 1px solid transparent;
    padding: 10px;
    transition: all 0.5s ease;
}

.section-box:hover {
    border: 1px solid rgba(128, 128, 128, 0.493);
    border-radius: 6px;
}

.section-body {
    min-height: 740px;
    background: #f4f3f3b7;
    margin-top: 10px;
    border-radius: 5px;
}
</style>