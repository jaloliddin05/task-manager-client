<template>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input filled v-model="form.title" label="title" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />
        <q-input type="textarea" filled v-model="form.description" label="description" />
        <q-input type="text" filled v-model="form.color" label="color" />
        <div>
            <q-btn label="Create" type="submit" color="primary" />
        </div>
    </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from 'src/store';
import { CreateProjectDto } from 'src/models/project.model';

export default defineComponent({
    setup() {
        const store = useStore()
        const form: CreateProjectDto = reactive({
            title: '',
            description: '',
            color: 'info'
        });

        return { store, form }
    },
    methods: {
        async onSubmit() {
            await this.store.dispatch('project/create', this.form)
            this.store.dispatch('project/changeCreateModal', false)
        }
    }
})
</script>