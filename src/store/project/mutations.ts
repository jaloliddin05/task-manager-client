import { MutationTree } from 'vuex';
import { Project } from 'src/models';
import { ProjectStateInterface } from './state';

const mutation: MutationTree<ProjectStateInterface> = {
  getAll(state: ProjectStateInterface, data: Project[]) {
    state.myTasks = data;
  },

  getOne(state: ProjectStateInterface, data: Project) {
    state.taskDetail = data;
  },

  create(state: ProjectStateInterface, type: Project) {
    console.log(state);
    console.log(type);
  },

  reomove(state: ProjectStateInterface, id: string) {
    console.log(state);
    console.log(id);
  },

  update(state: ProjectStateInterface, type: Project) {
    console.log(state);
    console.log(type);
  },
};

export default mutation;
