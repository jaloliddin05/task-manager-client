import { api } from 'src/boot/axios';
import { User } from 'src/models';
const mainUrl = '/user';

export default {
  async getAll() {
    return await api.get(mainUrl);
  },

  async getOne(id: string) {
    return await api.get(`${mainUrl}/${id}`);
  },

  async update(id: string, data: Partial<User>) {
    return await api.patch(`${mainUrl}/${id}`, data);
  },

  async deleteOne(id: string) {
    return await api.delete(`${mainUrl}/${id}`);
  },
};
