import {
  type V2_MetaFunction,
  type LinksFunction,
  json,
} from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { BASE_API_URL } from "~/common/constants.server";
import { getGlobalEnv } from "~/common/utils";
import blogIndexStyles from "~/styles/blog/blog-index.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: blogIndexStyles,
  },
];

export const loader = async () => {
  try {
    const indexUrl = `${BASE_API_URL}/pages/?type=blog.BlogIndexPage&fields=*`;
    const indexResponse = await fetch(indexUrl);
    const indexResponseData = await indexResponse.json();
    if (!indexResponse.ok || !indexResponseData.items.length) {
      throw new Response("Sorry, that is a 404", { status: 404 });
    }
    const { items: indexItems } = indexResponseData;

    const detailUrl = `${BASE_API_URL}/pages/?type=blog.BlogDetailPage&fields=*`;
    const detailResponse = await fetch(detailUrl);
    const detailResponseData = await detailResponse.json();
    if (!detailResponse.ok) {
      throw new Response("Sorry, that is a 404", { status: 404 });
    }
    const { items: detailItems } = detailResponseData;

    return json({
      detailItems: detailItems,
      indexItems: indexItems,
    });
  } catch (error) {
    throw new Response("Sorry, that is a 500", { status: 500 });
  }
};

export default function BlogIndexRoute() {
  const { detailItems, indexItems } = useLoaderData<typeof loader>();
  const indexPage = indexItems[0];
  return (
    <>
      <h1>{indexPage.display_title}</h1>
      <h2>{indexPage.intro}</h2>

      <ul>
        {detailItems.length &&
          detailItems.map((post) => {
            return (
              <>
                <ul>
                  <li>
                    <Link to={post.meta.slug}>{post.display_title}</Link>
                  </li>
                </ul>
              </>
            );
          })}
      </ul>
    </>
  );
}
