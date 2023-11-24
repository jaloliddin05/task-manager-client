import { Project } from 'src/models';

export interface ProjectStateInterface {
  taskDetail: Project | null;
  myTasks: Project[];
}

function state(): ProjectStateInterface {
  return {
    taskDetail: null,
    myTasks: [],
  };
}

export default state;
