import { api } from 'src/boot/axios';
import { SignInDto, SignUpDto } from 'src/models/user.model';
const mainUrl = '/auth';

export default {
  async signup(data: SignUpDto) {
    return await api.post(`${mainUrl}/registr`, data, {
      withCredentials: true,
    });
  },

  async signin(data: SignInDto) {
    return await api.post(`${mainUrl}/login`, data, { withCredentials: true });
  },
};
