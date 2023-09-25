import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import homeStyle from "~/styles/home.css";
import { BASE_API_URL } from "~/common/constants.server";
import { getGlobalEnv } from "~/common/utils";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: homeStyle,
  },
];

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
    const url = `${BASE_API_URL}/pages/?slug=home&type=home.HomePage&fields=*`;
    const response = await fetch(url);
    const responseData = await response.json();
    const data = responseData.items[0];
    return json({
      data: data,
    });
  } catch (error) {}
};

// page components

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  const ENV = getGlobalEnv();
  console.log(ENV);
  return (
    <div>
      <div className="banner_container">
        <div className="titre_texte">
          <h1>{data.banner_title}</h1>
          <p>{data.banner_text}</p>
        </div>
        <img
          src={`${ENV.BASE_BACK_URL}${data.banner_image.meta.download_url}`}
          alt={`${data.banner_image.title}`}
        />
      </div>
    </div>
  );
}
