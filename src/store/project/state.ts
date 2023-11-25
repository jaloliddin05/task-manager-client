import { Project } from 'src/models';

export interface ProjectStateInterface {
  projectDetail: Project | null;
  projects: Project[];
  createProjectModal: boolean;
  updateProjectModal: boolean;
}

function state(): ProjectStateInterface {
  return {
    projectDetail: null,
    projects: [],
    createProjectModal: false,
    updateProjectModal: false,
  };
}

export default state;
