import BlogList from "@/components/blogs/BlogList";
import React from "react";
import { posts } from "@/data/posts";

function Blog() {
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}

export default Blog;
