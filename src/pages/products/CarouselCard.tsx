import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Product } from "@/types/index";

import { Link } from "react-router-dom";

interface ProductProps {
  products: Product[];
}

export function CarouselCard({ products }: ProductProps) {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="flex gap-4 p-4 lg:px-4">
              <img
                src={product.images[0]}
                alt=""
                className="size-28 rounded-md"
              />
              <div className="text-sm">
                <h3 className="mb-2 line-clamp-1 font-bold">{product.name}</h3>
                <p className="text-muted-foreground my-2 line-clamp-2">
                  {product.description}
                </p>
                <Link to={`products/${product.id}`} className="hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
