import { Section, User } from '.';

interface Project {
  id: string;
  title: string;
  description?: string;
  color?: string;
  owner: User;
  members: User[];
  sections: Section[];
}

export interface CreateProjectDto {
  title: string;
  description?: string;
  color?: string;
}

export default Project;
