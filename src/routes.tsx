import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import BlogRootLayout from "./pages/blogs/BlogRootLayout";
import Blog from "./pages/blogs/Blog";
import BlogDetail from "./pages/blogs/BlogDetail";

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
    ],
  },
]);

export default router;
