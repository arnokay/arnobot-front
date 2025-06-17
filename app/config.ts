export default {
  app: {
    sessionTokenKey: "s",
  },
  services: {
    authURL: getEnvOrThrow("VITE_APP_AUTH_API_URL"),
    twitchURL: getEnvOrThrow("VITE_APP_TWITCH_API_URL"),
    coreURL: getEnvOrThrow("VITE_APP_CORE_API_URL"),
  },
};

function getEnvOrThrow(name: string): string {
  const env = import.meta.env[name]
  if (!env) {
    throw new Error(`no env variable: ${name}`);
  }

  return env;
}

