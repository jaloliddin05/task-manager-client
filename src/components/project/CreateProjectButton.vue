<template>
    <q-item clickable v-ripple class="p-item">
        <q-item-section>
            <div class="row items-center">
                <button class="add-pr-btn">
                    <q-icon class="btn-icon" name="add" />
                </button>
                <span class="btn-span">Create project</span>
            </div>
        </q-item-section>
    </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>

<style scoped>
.p-item {
    border-radius: 6px;
}


.add-pr-btn {
    display: inline-block;
    width: 45px;
    height: 45px;
    text-align: center;
    border: 2px dotted gray;
    border-radius: 8px;
    background-color: transparent;
}

.btn-icon {
    font-size: 28px;
    color: gray;
}

.btn-span {
    margin-left: 25px;
    color: gray;
}
</style>