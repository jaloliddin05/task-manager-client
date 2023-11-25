<template>
    <q-item class="full-width q-pa-none q-pt-sm">
        <q-card class="my-card full-width">
            <q-card-section class="row items-center">
                <q-icon name="done" />
                <input type="text" v-model="text" class="task-input" placeholder="Write a task name" @blur="close" />
            </q-card-section>
        </q-card>
    </q-item>
</template>
  
<script lang="ts">
import { useStore } from 'src/store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const store = useStore()

        return { text: ref(''), store }
    },
    methods: {
        async close() {
            if (!this.text) {
                this.$emit('remove', false)
            } else {
                await this.create()
                this.$emit('remove', false)
            }
        },
        async create() {
            await this.store.dispatch('task/create', {
                title: this.text,
                section: this.section
            })
        }
    },
    props: {
        section: String
    }
});
</script>
  

<style scoped>
.task-input {
    border: none;
    outline: none;
    margin-left: 10px;
}
</style>