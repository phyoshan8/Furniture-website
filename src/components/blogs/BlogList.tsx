import React from "react";
import type { Post } from "@/types";
import { Link } from "react-router";

interface PostProps {
  posts: Post[];
}

function BlogList({ posts }: PostProps) {
  return (
    <div className="container mx-auto">
      <div className="my-8 grid grid-cols-1 gap-16 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        {posts.map((post) => (
          <Link to={`/blogs/${post.id}`} key={post.id}>
            <img
              src={post.image}
              className="hover:shadow-foreground mb-4 w-full rounded-xl transition-transform duration-300 hover:scale-[1.01]"
            />
            <h2 className="mb-2 line-clamp-1 text-xl font-bold">
              {post.title}
            </h2>
            <h3 className="line-clamp-3 font-normal">{post.content}</h3>
            <div className="mt-2 text-sm">
              <span>
                by<span className="font-semibold"> {post.author} </span>
                on
                <span className="font-semibold"> {post.updated_at}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
