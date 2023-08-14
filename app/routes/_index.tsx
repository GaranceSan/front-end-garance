import type { V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

//types

type TResponseData = {
  meta: {
    total_count: number;
  };
  items: [
    {
      id: number;
      meta: {
        type: string;
        detail_url: string;
        html_url: string;
        slug: string;
        show_in_menus: boolean;
        seo_title: string;
        search_description: string;
        first_published_at: string;
        alias_of: null | string;
        locale: string;
      };
      title: string;
      intro: string;
    },
  ];
};

//helper functions

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// loaders

export const loader = async () => {
  try {
    const url =
      "http://127.0.0.1:8000/api/v2/pages/?slug=home&type=home.HomePage&fields=*";
    const response = await fetch(url);
    const responseData = await response.json();
    const data = responseData.items[0];
    console.log(responseData);
    return json({
      data: data,
    });
  } catch (error) {}
};

// page components

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
    </main>
  );
}
