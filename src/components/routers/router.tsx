import { createBrowserRouter } from "react-router";
import MainPage from "../pages/Home/Index";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);
