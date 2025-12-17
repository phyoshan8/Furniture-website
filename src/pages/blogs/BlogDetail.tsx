import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// import type { Post,Tag } from "@/types/index";
import { Icons } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import RichTextEditor from "@/components/blogs/RichTextEditor";

function BlogDetail() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === postId);

  return (
    <>
      <Suspense>
        <div className="container mx-auto px-4 lg:px-0">
          <section className="flex flex-col lg:flex-row">
            <section className="w-full lg:w-3/4 lg:pr-8">
              <Button variant="outline" className="mb-8">
                <Link to="blogs" className="flex gap-2">
                  <Icons.arrowLeft />
                  All Posts
                </Link>
              </Button>
              {post ? (
                <>
                  <h2 className="mb-8 text-4xl font-extrabold">{post.title}</h2>

                  <div className="mb-8 flex flex-col text-sm">
                    <span className="font-semibold"> {post.author} </span>
                    on
                    <span className="font-semibold"> {post.updated_at}</span>
                    <h3 className="font-normal">{post.content}</h3>
                  </div>

                  <img
                    src={post.image}
                    className="hover:shadow-foreground mb-4 w-full rounded-xl transition-transform duration-300 hover:scale-[1.01]"
                  />
                  <RichTextEditor content={post.body} className="my-8" />
                  <div className="mb-12 space-x-2">
                    {post.tags.map((tag) => (
                      <Button variant="secondary">{tag}</Button>
                    ))}
                  </div>
                </>
              ) : (
                <span className="mt-8 mb-16">No posts found</span>
              )}
            </section>
            <section className="my-20 w-full lg:w-1/4">
              <Link to={`/blogs`}>
                <div className="mb-8 flex flex-row items-center gap-2 px-4 lg:px-0">
                  <h3 className="text-2xl font-bold">Other Posts</h3>
                  <Icons.layersIcon className="size-6" />
                </div>
              </Link>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                {posts.map((post) => (
                  <Link key={post.id} to={`/blogs/${post.id}`}>
                    <div className="flex w-full gap-4 space-y-8 px-4 lg:px-0">
                      <img
                        src={post.image}
                        alt={`${post.title} Image`}
                        className="w-1/4 rounded-lg"
                      />
                      <div className="text-foreground w-3/4 text-sm">
                        <p className="line-clamp-2">{post.content}</p>

                        <i className="text-muted-foreground">...see more</i>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </section>
        </div>
      </Suspense>
    </>
  );
}

export default BlogDetail;
