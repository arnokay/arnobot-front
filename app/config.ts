
enum Platform {
  Kick = "kick",
  Twitch = "twitch",
}

type config = {
  app: {
    name: string,
    sessionTokenKey: string,
  },
  platforms: Platform[],
  api: {
    main: string,
    auth: string,
  },
};

function getEnvOrThrow(name: string): string {
  const env = import.meta.env[name]
  if (!env) {
    throw new Error(`no env variable: ${name}`);
  }

  return env;
}

export default {
  app: {
    name: "arnobot",
    sessionTokenKey: "s",
  },
  platforms: [Platform.Kick, Platform.Twitch],
  api: {
    main: getEnvOrThrow("VITE_APP_MAIN_API_URL"),
    auth: getEnvOrThrow("VITE_APP_AUTH_API_URL"),
  },
} satisfies config;

