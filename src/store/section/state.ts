import { Section } from 'src/models';

export interface SectionStateInterface {
  taskDetail: Section | null;
  myTasks: Section[];
}

function state(): SectionStateInterface {
  return {
    taskDetail: null,
    myTasks: [],
  };
}

export default state;
