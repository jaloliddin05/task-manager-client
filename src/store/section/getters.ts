import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SectionStateInterface } from './state';

const getters: GetterTree<SectionStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
