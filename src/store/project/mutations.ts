import { MutationTree } from 'vuex';
import { Project, Section } from 'src/models';
import { ProjectStateInterface } from './state';

const mutation: MutationTree<ProjectStateInterface> = {
  getAll(state: ProjectStateInterface, data: Project[]) {
    state.projects = data;
  },

  getOne(state: ProjectStateInterface, data: Project) {
    state.projectDetail = data;
  },

  getMyProjects(state: ProjectStateInterface, data: Project[]) {
    state.projects = data;
  },

  create(state: ProjectStateInterface, data: Project) {
    state.projects.push(data);
    console.log(data);
  },

  reomove(state: ProjectStateInterface, id: string) {
    console.log(state);
    console.log(id);
  },

  update(state: ProjectStateInterface, type: Project) {
    console.log(state);
    console.log(type);
  },

  addSectionToProject(state: ProjectStateInterface, data: Section) {
    state.projectDetail?.sections.push(data);
  },

  changeCreateModal(state: ProjectStateInterface, bool: boolean) {
    state.createProjectModal = bool;
  },

  changeUpdateModal(state: ProjectStateInterface, bool: boolean) {
    state.updateProjectModal = bool;
  },
};

export default mutation;
