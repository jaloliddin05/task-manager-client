import { api } from 'src/boot/axios';
import { User } from 'src/models';
const mainUrl = '/user';

export default {
  async getAll() {
    return await api.get(mainUrl, { withCredentials: true });
  },

  async getMe() {
    return await api.get(`${mainUrl}/me`, { withCredentials: true });
  },

  async getOne(id: string) {
    return await api.get(`${mainUrl}/${id}`, { withCredentials: true });
  },

  async update(id: string, data: Partial<User>) {
    return await api.patch(`${mainUrl}/${id}`, data, { withCredentials: true });
  },

  async deleteOne(id: string) {
    return await api.delete(`${mainUrl}/${id}`, { withCredentials: true });
  },
};
