import { Outlet } from "@remix-run/react";

export default function BlogParentRoute() {
  return (
    <>
      <Outlet />
    </>
  );
}
