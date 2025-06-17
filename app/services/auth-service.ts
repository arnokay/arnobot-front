import { authApi } from '../api/client';

type Provider = "twitch";

export const authService = {
  getProviderAuthURL: (provider: Provider) => authApi.getUri({
    url: `/v1/provider/${provider}`,
  })
};

