import { MutationTree } from 'vuex';
import { User } from 'src/models';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
  getAll(state: UserStateInterface, data: User[]) {
    state.myTasks = data;
  },

  getOne(state: UserStateInterface, data: User) {
    state.user = data;
  },

  getMe(state: UserStateInterface, data: User) {
    state.user = data;
  },

  create(state: UserStateInterface, type: User) {
    console.log(state);
    console.log(type);
  },

  reomove(state: UserStateInterface, id: string) {
    console.log(state);
    console.log(id);
  },

  update(state: UserStateInterface, type: User) {
    console.log(state);
    console.log(type);
  },
};

export default mutation;
