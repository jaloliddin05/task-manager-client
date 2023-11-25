<template>
    <q-item class="full-width q-pa-none q-mt-sm">
        <q-card class="my-card full-width">
            <q-card-section class="row items-center full-width">
                <q-icon name="done" />
                <div class="task-title">{{ task?.title }}</div>
            </q-card-section>
            <q-card-section></q-card-section>
        </q-card>
    </q-item>
</template>
  
<script lang="ts">
import { Task } from 'src/models';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        task: Object as () => Task
    }
});
</script>
  

<style scoped>
.task-title {
    margin-left: 10px;
}
</style>