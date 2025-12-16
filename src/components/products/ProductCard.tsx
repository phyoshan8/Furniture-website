import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/types";
import { Icons } from "../icons/Icon";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

function ProductCard({ product, className }: ProductProps) {
  return (
    <Card
      className={cn(`size-full overflow-hidden rounded-lg py-0`, className)}
    >
      <CardHeader className="gap-0 border-b p-0">
        <Link to={`/products/${product.id}`}>
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt={product.name}
              aria-label={product.name}
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </Link>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
        <CardDescription className="text-lg">
          <span className="font-medium">{formatPrice(product.price)}</span>
          {product.discount > 0 && (
            <span className="ml-6 font-extralight line-through">
              {formatPrice(product.discount)}
            </span>
          )}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {product.status === "active" ? (
          <Button className="mb-8 w-full bg-green-950 py-6 text-lg font-bold">
            <Icons.circlePlus className="mr-5 size-7" />
            Add to card
          </Button>
        ) : (
          <Button
            className="mb-8 w-full bg-green-950 py-6 text-lg font-bold"
            disabled={true}
          >
            Sold out
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
