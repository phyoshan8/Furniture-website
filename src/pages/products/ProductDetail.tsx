import { products } from "@/data/products";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ProductCard from "@/components/products/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div className="container mx-auto">Product not found.</div>;
  }

  return (
    <div className="container mx-auto">
      <Button className="">
        <Link to={product.id}></Link>
      </Button>
      <section className=""></section>
      <section className="">
        <ScrollArea className="pb-8">
          <div className="">
            <span className="mt-8">Featured Products</span>
            <div className="grid grid-cols-1 gap-6 space-x-4 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-4">
              {products.slice(0, 4).map((item) => (
                <ProductCard product={item} key={item.id} className="" />
              ))}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetail;
