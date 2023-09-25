import { cssBundleHref } from "@remix-run/css-bundle";
import { type LinksFunction, json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import baseStyles from "./styles/base.css";
import baseElementsStyles from "./styles/base-elements.css";
import { createGlobalEnvObj } from "./env.server";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "stylesheet",
    href: baseStyles,
  },
  {
    rel: "stylesheet",
    href: baseElementsStyles,
  },
];

export async function loader() {
  const GLOBAL_ENV = createGlobalEnvObj();
  return json({ GLOBAL_ENV });
}

export default function App() {
  const { GLOBAL_ENV } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CV</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </header>
        <Outlet />
        <footer>
          <p>© Garance 2023</p>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.GLOBAL_ENV = ${JSON.stringify(GLOBAL_ENV)}`,
          }}
        />
        <LiveReload />
      </body>
    </html>
  );
}
