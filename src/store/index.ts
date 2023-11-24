import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import { Router } from 'vue-router';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';

import user from './user';
import project from './project';
import task from './task';
import section from './section';
import { UserStateInterface } from './user/state';
import { ProjectStateInterface } from './project/state';
import { TaskStateInterface } from './task/state';
import { SectionStateInterface } from './section/state';

export interface StateInterface {
  user: UserStateInterface;
  project: ProjectStateInterface;
  task: TaskStateInterface;
  section: SectionStateInterface;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key');

// Provide typings for `this.$router` inside Vuex stores
declare module 'vuex' {
  export interface Store<S> {
    readonly $router: Router;
  }
}

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      user,
      project,
      task,
      section,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
