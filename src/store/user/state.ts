import { User } from 'src/models';

export interface UserStateInterface {
  user: User | null;
  myTasks: User[];
}

function state(): UserStateInterface {
  return {
    user: null,
    myTasks: [],
  };
}

export default state;
