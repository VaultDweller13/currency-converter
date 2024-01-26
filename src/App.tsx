import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CurrencyTable } from "./components/CurrencyTable";
import { Home } from "./pages/Home";
import { Layout } from "./layouts/Layout";
import { getCurrencies } from "./api";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={getCurrencies} id="root" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="currencies" element={<CurrencyTable />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
