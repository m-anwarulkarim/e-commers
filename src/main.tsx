import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./components/routers/router";
import { CartProvider } from "./components/context/CartContext";
import MiniCartSidebar from "./components/Product/MiniCartSidebar";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./components/RTK/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <CartProvider>
        <div className="p-4 flex justify-end">
          <MiniCartSidebar />
        </div>
        <RouterProvider router={router} />{" "}
      </CartProvider>
    </ReduxProvider>
  </StrictMode>
);
