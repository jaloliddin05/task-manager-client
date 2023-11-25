interface Task {
  id: string;
  title: string;
  description?: string;
}

export interface CreateTaskDto {
  title: string;
  section?: string;
}

export default Task;
