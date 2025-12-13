import { useState } from "react";
import Pagination from "@/components/products/Pagination";
import ProductFilter from "@/components/products/ProductFilter";
import { filterList, products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

function Product() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleFilterSubmit(filters: {
    categories: string[];
    types: string[];
  }) {
    const newProducts = products.filter((p) => {
      // Adjust property names (e.g., p.categoryId / p.typeId) to match your product shape
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(p.categoryId);
      const typeMatch =
        filters.types.length === 0 || filters.types.includes(p.categoryId);
      return categoryMatch && typeMatch;
    });
    setFilteredProducts(newProducts);
  }

  return (
    <div className="container mx-auto mb-8">
      <section className="flex flex-col lg:flex-row">
        <section className="felx ml-4 w-full flex-col md:w-full md:flex-row lg:ml-0 lg:w-1/5">
          <ProductFilter
            filterList={filterList}
            onFilterSubmit={handleFilterSubmit}
          />
        </section>
        <section className="ml-4 w-full lg:ml-0 lg:w-4/5">
          <h3 className="my-8 ml-4 text-3xl font-bold">All Products</h3>
          <div className="mb-8 grid grid-cols-1 gap-6 gap-y-12 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <Pagination />
        </section>
      </section>
    </div>
  );
}

export default Product;
