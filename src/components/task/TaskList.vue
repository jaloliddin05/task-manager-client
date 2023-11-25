<template>
    <q-list class="row q-pa-md q-gutter-xs task-list">
        <TaskItem v-for="task of tasks" :key="task.id" :task="task" />
        <CreateTask v-if="isCreate" @remove="closeCreateTask" :section="section" />
        <AddTaskButton @click="isCreate = !isCreate" />
    </q-list>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import TaskItem from './TaskItem.vue';
import AddTaskButton from './AddTaskButton.vue';
import CreateTask from './CreateTask.vue';
import { Task } from 'src/models';


export default defineComponent({
    components: {
        TaskItem,
        AddTaskButton,
        CreateTask
    },
    props: {
        tasks: Object as () => Task[],
        section: String
    },
    setup() {
        const isCreate = ref(false)

        return { isCreate }
    },
    methods: {
        closeCreateTask(bool: boolean) {
            console.log(bool);

            this.isCreate = bool
        }
    }
})
</script>
  

<style>
.task-list {
    pointer-events: auto;
}
</style>