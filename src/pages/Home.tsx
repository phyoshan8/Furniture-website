import { Link } from "react-router";

import Couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { CarouselCard } from "../components/products/CarouselCard";
import BlogCard from "../components/blogs/BlogCard";
import { posts } from "@/data/posts";
import ProductCard from "@/components/products/ProductCard";

const samplePosts = posts.slice(0, 3);
const sampleProduct = products.slice(0, 4);

function Home() {
  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div className="my-4 flex flex-col justify-between px-4 md:flex-row md:px-0 lg:my-8">
      <h3 className="font-semi-bold mb-4 text-2xl">{title}</h3>
      <Link to={href} className="text-muted-foreground hover:underline">
        {sideText}
      </Link>
    </div>
  );
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Text Section */}
        <div className="my-8 text-center lg:mt-8 lg:mb-0 lg:w-2/5 lg:text-left">
          <h1 className="text-own mb-4 text-4xl font-extrabold lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="text-own mb-6 lg:mb-8">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div>
            <Button
              asChild
              className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold"
            >
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-bold"
            >
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
      </div>
      <CarouselCard products={products} />

      {/*Featured Products section */}
      <Title
        title="Featured Products"
        href="/products"
        sideText="View all Products "
      ></Title>
      <div className="grid grid-cols-1 gap-6 space-x-4 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-4">
        {sampleProduct.map((product) => (
          <>
            <ProductCard key={product.id} product={product} />
          </>
        ))}
      </div>

      {/* Recent Blog  sections */}
      <Title
        title="Recent Blogs"
        href="/blogs"
        sideText="View all Posts "
      ></Title>
      <BlogCard posts={samplePosts} />
    </div>
  );
}

export default Home;
