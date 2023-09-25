export function getEnvOrThrow(name: string) {
  const envVar = process.env[name];
  if (!envVar) {
    throw new Error(`Missing env variable -> ${name}. Please set it.`);
  }
  return envVar;
}

export function createGlobalEnvObj() {
  return {
    BASE_BACK_URL: getEnvOrThrow("BASE_BACK_URL"),
  };
}

export type TGlobalEnv = ReturnType<typeof createGlobalEnvObj>;
