import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

import ProductRootLayout from "./pages/products/ProductRootLayout";
import Product from "./pages/products/Product";
import ProductDetail from "./pages/products/ProductDetail";
import { lazy } from "react";
const BlogRootLayout = lazy(() => import("@/pages/blogs/BlogRootLayout"));
const BlogDetail = lazy(() => import("@/pages/blogs/BlogDetail"));
const Blog = lazy(() => import("@/pages/blogs/Blog"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: Home },

      {
        path: "blogs",
        Component: BlogRootLayout,
        children: [
          { index: true, Component: Blog },
          { path: ":postId", Component: BlogDetail },
        ],
      },
      {
        path: "products",
        Component: ProductRootLayout,
        children: [
          { index: true, Component: Product },
          { path: ":productId", Component: ProductDetail },
        ],
      },
    ],
  },
]);

export default router;
