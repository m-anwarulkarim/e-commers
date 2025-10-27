import { createBrowserRouter } from "react-router";
import MainPage from "../pages/Home/Index";
import MainLayout from "../layout/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
