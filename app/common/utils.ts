import { createGlobalEnvObj, type TGlobalEnv } from "~/env.server";

export function getGlobalEnv(): TGlobalEnv {
  if (typeof window !== "undefined") {
    //on client side
    return window.GLOBAL_ENV;
  } else {
    //on server side
    return createGlobalEnvObj();
  }
}
