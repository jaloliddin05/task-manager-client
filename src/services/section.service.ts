import { api } from 'src/boot/axios';
import { CreateSectionDto } from 'src/models/section.model';
const mainUrl = '/section';

export default {
  async getAll() {
    return await api.get(mainUrl);
  },

  async getOne(id: string) {
    return await api.get(`${mainUrl}/${id}`);
  },

  async create(data: CreateSectionDto) {
    return await api.post(mainUrl, data);
  },

  async update(id: string, data: Partial<CreateSectionDto>) {
    return await api.patch(`${mainUrl}/${id}`, data);
  },

  async deleteOne(id: string) {
    return await api.delete(`${mainUrl}/${id}`);
  },
};
