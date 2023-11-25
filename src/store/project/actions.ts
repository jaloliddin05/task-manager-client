import { ActionTree, Commit } from 'vuex';
import { projectService } from 'src/services';
import { StateInterface } from '../index';
import { ProjectStateInterface } from './state';
import { CreateProjectDto } from 'src/models/project.model';

const actions: ActionTree<ProjectStateInterface, StateInterface> = {
  async getAll({ commit }: { commit: Commit }) {
    const { data } = await projectService.getAll();
    commit('getAll', data);
  },

  async getOne({ commit }: { commit: Commit }, id: string) {
    const { data } = await projectService.getOne(id);
    commit('getOne', data);
  },

  async getMyProjects({ commit }: { commit: Commit }) {
    const { data } = await projectService.getMyProjects();
    commit('getMyProjects', data);
  },

  async create({ commit }: { commit: Commit }, createData: CreateProjectDto) {
    const { data } = await projectService.create(createData);
    commit('create', data);
  },

  async update(
    { commit }: { commit: Commit },
    { id, data: updateData }: { id: string; data: Partial<CreateProjectDto> }
  ) {
    const { data } = await projectService.update(id, updateData);
    commit('update', data);
  },

  async remove({ commit }: { commit: Commit }, id: string) {
    await projectService.deleteOne(id);
    commit('remove', id);
  },

  changeCreateModal({ commit }: { commit: Commit }, bool: boolean) {
    commit('changeCreateModal', bool);
  },

  changeUpdateModal({ commit }: { commit: Commit }, bool: boolean) {
    commit('changeUpdateModal', bool);
  },
};

export default actions;
