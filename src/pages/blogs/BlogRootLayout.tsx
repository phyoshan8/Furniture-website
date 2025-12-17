import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function BlogRootLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
}

export default BlogRootLayout;
