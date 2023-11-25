<template>
    <q-card style="max-width: 650px;min-height: 500px;" class="col-6 card-item">
        <div class="q-pa-lg row">
            <h6 class="project-heading">Projects</h6>
        </div>
        <q-list class="row q-pa-md q-gutter-md">
            <create-project-button class="col-5" @click="changeCreateModal(true)" />
            <ProjectListItem class="col-5" v-for="project of projects" :key="project.id" :color="project.color"
                :title="project.title" :id="project.id" />
        </q-list>
    </q-card>
    <form-dialog :showDialog="createProjectModal" @changeDialogVisible="changeCreateModal">
        <CreateProjectForm />
    </form-dialog>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import CreateProjectButton from '../project/CreateProjectButton.vue';
import ProjectListItem from '../project/ProjectListItem.vue';
import CreateProjectForm from '../project/CreateProjectForm.vue';

export default defineComponent({
    components: {
        CreateProjectButton,
        ProjectListItem,
        CreateProjectForm
    },
    methods: {
        ...mapActions({
            changeCreateModal: 'project/changeCreateModal'
        })
    },
    computed: {
        ...mapState({
            projects: (state: any) => state.project.projects,
            createProjectModal: (state: any) => state.project.createProjectModal
        })
    }
})
</script>
  
<style scoped>
.project-heading {
    font-size: 18px;
    color: #4A4B4D;
    padding: 0px 15px;
    margin: 0;
}
</style>