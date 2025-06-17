import config from "~/config";

export function setSessionToken(token: string): void {
  return localStorage.setItem(config.app.sessionTokenKey, token);
}

export function getSessionToken(): string | null {
  return localStorage.getItem(config.app.sessionTokenKey);
};

export function clearSessionToken(): void {
  localStorage.removeItem(config.app.sessionTokenKey);
};
