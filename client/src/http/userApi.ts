import { $authHost, $noAuthHost } from "./index";
import { AuthTokenBody , AuthResponseData} from '../utils/types'
import jwt_decode from 'jwt-decode';

export const registration = async (email: string, password: string) => {
  const response = await $noAuthHost.post("api/user/registration", {
    email,
    password,
    role: 'ADMIN',
  })
  const data = response.data as AuthResponseData
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token) as AuthTokenBody
};

export const login = async (email: string, password: string) => {
    const response = await $noAuthHost.post("api/user/login", {
        email,
        password,
    });
    const data = response.data as AuthResponseData
    localStorage.setItem('token', data.token)
  return jwt_decode(data.token) as AuthTokenBody
};

export const check = async () => {
  const response = await $authHost.get("api/user/auth");
  const data = response.data as AuthResponseData
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token) as AuthTokenBody
};
