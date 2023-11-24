import { api } from 'src/boot/axios';
import { CreateProjectDto } from 'src/models/project.model';
const mainUrl = '/project';

export default {
  async getAll() {
    return await api.get(mainUrl);
  },

  async getOne(id: string) {
    return await api.get(`${mainUrl}/${id}`);
  },

  async create(data: CreateProjectDto) {
    return await api.post(mainUrl, data);
  },

  async update(id: string, data: Partial<CreateProjectDto>) {
    return await api.patch(`${mainUrl}/${id}`, data);
  },

  async deleteOne(id: string) {
    return await api.delete(`${mainUrl}/${id}`);
  },
};
