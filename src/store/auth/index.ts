import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { AuthStateInterface } from './state';
import actions from './actions';
import mutations from './mutations';

const exampleModule: Module<AuthStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export default exampleModule;
