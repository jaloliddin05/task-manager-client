import { ActionTree, Commit } from 'vuex';
import { taskService } from 'src/services';
import { StateInterface } from '../index';
import { TaskStateInterface } from './state';
import { CreateTaskDto } from 'src/models/task.model';

const actions: ActionTree<TaskStateInterface, StateInterface> = {
  async getAll({ commit }: { commit: Commit }) {
    const { data } = await taskService.getAll();
    commit('getAll', data);
  },

  async getOne({ commit }: { commit: Commit }, id: string) {
    const { data } = await taskService.getOne(id);
    commit('getOne', data);
  },

  async create({ commit }: { commit: Commit }, createData: CreateTaskDto) {
    const { data } = await taskService.create(createData);
    commit('create', data);
  },

  async update(
    { commit }: { commit: Commit },
    { id, data: updateData }: { id: string; data: Partial<CreateTaskDto> }
  ) {
    const { data } = await taskService.update(id, updateData);
    commit('update', data);
  },

  async remove({ commit }: { commit: Commit }, id: string) {
    await taskService.deleteOne(id);
    commit('remove', id);
  },
};

export default actions;
