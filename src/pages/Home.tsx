import { Link } from "react-router";

import Couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { CarouselCard } from "./products/CarouselCard";

// import { Skeleton } from "@/components/ui/skeleton";

function Home() {
  // const { productsData, postsData } = useLoaderData();

  // const {
  //   data: productsData,
  //   isLoading: isLoadingProduct,
  //   isError: isErrorProduct,
  //   error: errorProduct,
  //   refetch: refetchProduct,
  // } = useQuery(productQuery("?limit=8"));
  // const {
  //   data: postsData,
  //   isLoading: isLoadingPost,
  //   isError: isErrorPost,
  //   error: errorPost,
  //   refetch: refetchPost,
  // } = useQuery(postQuery("?limit=3"));

  // if (isLoadingProduct && isLoadingPost) {
  //   return (
  //     <div className="flex flex-col space-y-3">
  //       <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  //       <div className="space-y-2">
  //         <Skeleton className="h-4 w-[250px]" />
  //         <Skeleton className="h-4 w-[200px]" />
  //       </div>
  //     </div>
  //   );
  // }

  // if (isErrorProduct && isErrorPost) {
  //   return (
  //     <div className="container mx-auto my-32 flex flex-1 place-content-center">
  //       <div className="text-center text-red-400">
  //         <p className="mb-4">
  //           {errorProduct.message} & {errorPost.message}
  //         </p>
  //         <Button
  //           onClick={() => {
  //             refetchProduct();
  //             refetchPost();
  //           }}
  //           variant="secondary"
  //         >
  //           Retry
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // }
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
        <div className="my-8 text-center lg:mt-16 lg:mb-0 lg:w-2/5 lg:text-left">
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
      <Title title="Recent Blogs" href="/blogs" sideText="View all "></Title>
    </div>
  );
}

export default Home;
