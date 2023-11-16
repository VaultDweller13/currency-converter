import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main>
      <h1>Currency converter</h1>
      <Outlet />
    </main>
  );
};
