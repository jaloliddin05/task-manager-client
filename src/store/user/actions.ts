import { ActionTree, Commit } from 'vuex';
import { userService } from 'src/services';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';
import { User } from 'src/models';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  async getAll({ commit }: { commit: Commit }) {
    const { data } = await userService.getAll();
    commit('getAll', data);
  },

  async getOne({ commit }: { commit: Commit }, id: string) {
    const { data } = await userService.getOne(id);
    commit('getOne', data);
  },

  async update(
    { commit }: { commit: Commit },
    { id, data: updateData }: { id: string; data: Partial<User> }
  ) {
    const { data } = await userService.update(id, updateData);
    commit('update', data);
  },

  async remove({ commit }: { commit: Commit }, id: string) {
    await userService.deleteOne(id);
    commit('remove', id);
  },
};

export default actions;
