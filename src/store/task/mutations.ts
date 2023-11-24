import { MutationTree } from 'vuex';
import { Task } from 'src/models';
import { TaskStateInterface } from './state';

const mutation: MutationTree<TaskStateInterface> = {
  getAll(state: TaskStateInterface, data: Task[]) {
    state.myTasks = data;
  },

  getOne(state: TaskStateInterface, data: Task) {
    state.taskDetail = data;
  },

  create(state: TaskStateInterface, type: Task) {
    console.log(state);
    console.log(type);
  },

  reomove(state: TaskStateInterface, id: string) {
    console.log(state);
    console.log(id);
  },

  update(state: TaskStateInterface, type: Task) {
    console.log(state);
    console.log(type);
  },
};

export default mutation;
