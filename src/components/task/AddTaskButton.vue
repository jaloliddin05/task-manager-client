<template>
    <q-item clickable class="full-width btn-add q-mt-sm">
        <button class="add-task-btn">+ Add task</button>
    </q-item>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>
  

<style scoped>
.add-task-btn {
    width: 100%;
    padding: 8px;
    display: inline-block;
    text-align: center;
    border: none;
    background-color: transparent;
    border-radius: 6px;
    transition: all 0.5s ease;
    color: gray;
    cursor: pointer;
}

.btn-add {
    cursor: pointer;
    border-radius: 5px;
}
</style>