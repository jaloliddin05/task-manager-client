import { ActionTree, Commit } from 'vuex';
import { authService } from 'src/services';
import { StateInterface } from '../index';
import { AuthStateInterface } from './state';
import { SignInDto, SignUpDto } from 'src/models/user.model';

const actions: ActionTree<AuthStateInterface, StateInterface> = {
  async signup({ commit }: { commit: Commit }, authData: SignUpDto) {
    const { data } = await authService.signup(authData);
    commit('signup', data);
  },

  async signin({ commit }: { commit: Commit }, authData: SignInDto) {
    try {
      const { data } = await authService.signin(authData);
      commit('signin', data);
      this.$router.push('/');
    } catch (err) {
      this.$router.push('/signin');
    }
  },
};

export default actions;
