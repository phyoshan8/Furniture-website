import { products } from "@/data/products";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ProductCard from "@/components/products/ProductCard";
import { Icons } from "@/components/icons/Icon";
import { Separator } from "@/components/ui/separator";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { formatPrice } from "@/lib/utils";
import Rating from "@/components/products/Rating";
import AddToFav from "@/components/products/AddToFav";

function ProductDetail() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div className="container mx-auto">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-0">
      <Button className="mb-8" asChild variant={"outline"}>
        <Link to="/products">
          <Icons.arrowLeft />
          All Products
        </Link>
      </Button>
      <section className="mb-8 flex flex-col gap-16 md:flex-row">
        <Carousel plugins={[plugin.current]} className="w-full md:w-1/2">
          <CarouselContent className="shadow-md">
            {product.images.map((image) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <img
                    src={image}
                    alt={product.name}
                    className="size-full rounded-lg object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Separator className="w-full md:hidden" />

        <div className="flex w-full flex-col md:w-1/2">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="text-muted-foreground font-semibold">
              {formatPrice(Number(product.price))}
            </p>
          </div>
          <Separator className="my-6" />
          <p className="text-muted-foreground">{product.inventory} in stock</p>
          <div className="flex items-center justify-between">
            <Rating rating={product.rating} />
            <AddToFav
              productId={Number(product.id)}
              rating={String(product.rating)}
            />
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <h2 className="line-clamp-1 text-2xl font-bold">
          More Products from the shop{" "}
        </h2>
        <ScrollArea className="pb-8">
          <div className="mt-8 flex gap-4">
            {products.slice(0, 4).map((item) => (
              <ProductCard
                product={item}
                key={item.id}
                className="min-w-[260px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetail;
