import {
  type V2_MetaFunction,
  type LinksFunction,
  type LoaderFunctionArgs,
  json,
} from "@remix-run/node";

import { useLoaderData, Link } from "@remix-run/react";
import { BASE_API_URL } from "~/common/constants.server";
import { getGlobalEnv } from "~/common/utils";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  console.log(slug);
  try {
    const url = `${BASE_API_URL}/pages/?slug=${slug}&type=blog.BlogDetailPage&fields=*`;
    const response = await fetch(url);
    const responseData = await response.json();
    if (!response.ok || !responseData.items.length) {
      throw new Response("Ooops sorry 404", { status: 404 });
    }
    const post = responseData.items[0];
    return json({ post: post });
  } catch (error) {}
  return null;
};

export default function BlogDetailRoute() {
  const { post } = useLoaderData<typeof loader>();
  const ENV = getGlobalEnv();

  return (
    <>
      <h1>{post.display_title}</h1>
      <div>
        <img
          src={`${ENV.BASE_BACK_URL}${post.blog_image.meta.download_url}`}
          alt={post.blog_image.title}
        />
      </div>
      {post.body.map((block) => {
        if (block.type === "text_block") {
          return (
            <div
              key={block.id}
              dangerouslySetInnerHTML={{ __html: block.value }}
            />
          );
        }
      })}
    </>
  );
}
