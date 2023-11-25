import { api } from 'src/boot/axios';
import { CreateProjectDto } from 'src/models/project.model';
const mainUrl = '/project';

export default {
  async getAll() {
    return await api.get(mainUrl, { withCredentials: true });
  },

  async getMyProjects() {
    return await api.get(`${mainUrl}/my-projects`, { withCredentials: true });
  },

  async getOne(id: string) {
    return await api.get(`${mainUrl}/${id}`, { withCredentials: true });
  },

  async create(data: CreateProjectDto) {
    return await api.post(mainUrl, data, { withCredentials: true });
  },

  async update(id: string, data: Partial<CreateProjectDto>) {
    return await api.patch(`${mainUrl}/${id}`, data, { withCredentials: true });
  },

  async deleteOne(id: string) {
    return await api.delete(`${mainUrl}/${id}`, { withCredentials: true });
  },
};
