import { MutationTree } from 'vuex';
import { SignUpDto } from 'src/models/user.model';
import { AuthStateInterface } from './state';

const mutation: MutationTree<AuthStateInterface> = {
  signup(state: AuthStateInterface, type: SignUpDto) {
    console.log(state);
    console.log(type);
  },

  signin(state: AuthStateInterface, data) {
    state.isAuthorized = true;
    state.token = data.accessToken;
  },
};

export default mutation;
