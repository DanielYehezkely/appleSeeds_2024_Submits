import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AdminProvider } from "./context/CheckAdminContext";
import { Layout } from "./components";
import { CartProvider } from "./context/CartContext";
import { FetchShoesProvider } from "./context/FetchShoesContext";

import {
  HomePage,
  ShoesPage,
  AddShoePage,
  NotFoundPage,
  CartPage,
  ShoePage,
  EditPage,
  ContactPage,
  PanelPage,
} from "./pages";
import { FetchUsersProvider } from "./context/FetchUsersContext";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "shoes",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ShoesPage />,
        },
        {
          path: ":shoeId",
          element: <ShoePage />,
        },
        {
          path: "add",
          element: <AddShoePage />,
        },
        {
          path: ":shoeId/edit",
          element: <EditPage />,
        },
        {
          path: "panel",
          element: <PanelPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <AdminProvider>
      <FetchUsersProvider>
        <FetchShoesProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </FetchShoesProvider>
      </FetchUsersProvider>
    </AdminProvider>
  );
};

export default App;
