import { authApi } from '../api/client';

type Provider = "twitch" | "kick";

export const authService = {
  getProviderAuthURL: (provider: Provider) => authApi.getUri({
    url: `/v1/provider/${provider}`,
  })
};

