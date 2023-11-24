import { MutationTree } from 'vuex';
import { Section } from 'src/models';
import { SectionStateInterface } from './state';

const mutation: MutationTree<SectionStateInterface> = {
  getAll(state: SectionStateInterface, data: Section[]) {
    state.myTasks = data;
  },

  getOne(state: SectionStateInterface, data: Section) {
    state.taskDetail = data;
  },

  create(state: SectionStateInterface, type: Section) {
    console.log(state);
    console.log(type);
  },

  reomove(state: SectionStateInterface, id: string) {
    console.log(state);
    console.log(id);
  },

  update(state: SectionStateInterface, type: Section) {
    console.log(state);
    console.log(type);
  },
};

export default mutation;
