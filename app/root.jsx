//import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import Header from "./components/Header";
//import db from "../../firebase.js";

import styles from "./tailwind.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Tabletop",
  viewport: "width=device-width,initial-scale=1",
  robots: "none",
});

export const links = () => [{ rel: "stylesheet", href: styles }];

/*export async function loader() {
  const user = await db.auth().currentUser; // Check if this works

  let avatar;

  return json({
    user: user || null,
    avatar: avatar,
  });
}*/

export default function App() {
  const { user, avatar } = useLoaderData();
  const signedIn = Boolean(user);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-50 p-0 text-slate-800">
        <Header
          links={[
            { title: "Characters", url: "/characters/" },
            { title: "Campaigns", url: "/campaigns/" },
            !signedIn && { title: "Login", url: "/login/" },
            !signedIn && { title: "Sign up", url: "/sign-up/" },
          ].filter(Boolean)}
          avatar={avatar}
          signedIn={signedIn}
        />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}