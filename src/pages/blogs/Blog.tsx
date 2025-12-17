import BlogList from "@/components/blogs/BlogList";
import { posts } from "@/data/posts";

function Blog() {
  return <BlogList posts={posts} />;
}

export default Blog;
