import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// List of all the pages
import Root from "./pages/root";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";
import NewProduct from "./pages/new";
import Cart from "./pages/cart";
import NotFound from "./pages/404";
import ProtectedRoute from "./pages/protection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetail /> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      // I am not sure if I should admin page
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
