import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { BASE_API_URL } from "~/common/constants.server";
import { getGlobalEnv } from "~/common/utils";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  try {
    const url = `${BASE_API_URL}/pages/?slug=blog-index&type=blog.BlogIndexPage&fields=*`;
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    return null;
  } catch (error) {}
  return null;
};
