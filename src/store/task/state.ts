import { Task } from 'src/models';

export interface TaskStateInterface {
  taskDetail: Task | null;
  myTasks: Task[];
}

function state(): TaskStateInterface {
  return {
    taskDetail: null,
    myTasks: [],
  };
}

export default state;
