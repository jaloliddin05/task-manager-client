import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ProjectStateInterface } from './state';

const getters: GetterTree<ProjectStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
