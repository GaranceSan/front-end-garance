import { getEnvOrThrow } from "~/env.server";

export const BASE_API_URL = getEnvOrThrow("BASE_API_URL");
