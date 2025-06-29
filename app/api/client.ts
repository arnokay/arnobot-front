import axios, { AxiosError } from 'axios';
import config from '~/config';
import { Unauthorized } from '~/lib/errors';
import { clearSessionToken, getSessionToken } from '~/lib/session';

const createApiClient = (baseURL: string) => {
  const client = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  client.interceptors.request.use((req) => {
    const token = getSessionToken();
    if (token) {
      req.headers.Authorization = `Session ${token}`;
    }
    return req;
  });

  client.interceptors.response.use((res) => res,
    (err: AxiosError) => {
      if (err.status === 401) {
        clearSessionToken();
        return Promise.reject(new Unauthorized());
      }

      return Promise.reject(err);
    })

  return client;
};

export const authApi = createApiClient(config.api.auth);
export const twitchApi = createApiClient(config.api.main);
