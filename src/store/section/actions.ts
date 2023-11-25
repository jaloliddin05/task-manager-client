import { ActionTree, Commit } from 'vuex';
import { sectionService } from 'src/services';
import { StateInterface } from '../index';
import { SectionStateInterface } from './state';
import { CreateSectionDto } from 'src/models/section.model';

const actions: ActionTree<SectionStateInterface, StateInterface> = {
  async getAll({ commit }: { commit: Commit }) {
    const { data } = await sectionService.getAll();
    commit('getAll', data);
  },

  async getOne({ commit }: { commit: Commit }, id: string) {
    const { data } = await sectionService.getOne(id);
    commit('getOne', data);
  },

  async create({ commit }: { commit: Commit }, createData: CreateSectionDto) {
    const { data } = await sectionService.create(createData);
    commit('project/addSectionToProject', data, { root: true });
  },

  async update(
    { commit }: { commit: Commit },
    { id, data: updateData }: { id: string; data: Partial<CreateSectionDto> }
  ) {
    const { data } = await sectionService.update(id, updateData);
    commit('update', data);
  },

  async remove({ commit }: { commit: Commit }, id: string) {
    await sectionService.deleteOne(id);
    commit('remove', id);
  },
};

export default actions;
