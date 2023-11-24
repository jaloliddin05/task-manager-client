import { api } from 'src/boot/axios';
import { CreateTaskDto } from 'src/models/task.model';
const mainUrl = '/task';

export default {
  async getAll() {
    return await api.get(mainUrl);
  },

  async getOne(id: string) {
    return await api.get(`${mainUrl}/${id}`);
  },

  async create(data: CreateTaskDto) {
    return await api.post(mainUrl, data);
  },

  async update(id: string, data: Partial<CreateTaskDto>) {
    return await api.patch(`${mainUrl}/${id}`, data);
  },

  async deleteOne(id: string) {
    return await api.delete(`${mainUrl}/${id}`);
  },
};
