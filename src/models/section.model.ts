import { Task } from '.';

interface Section {
  id: string;
  title: string;
  index: number;
  tasks: Task[];
}

export interface CreateSectionDto {
  title: string;
  index: number;
  project: string;
}

export default Section;
