import { User } from 'src/models';

export interface UserStateInterface {
  taskDetail: User | null;
  myTasks: User[];
}

function state(): UserStateInterface {
  return {
    taskDetail: null,
    myTasks: [],
  };
}

export default state;
