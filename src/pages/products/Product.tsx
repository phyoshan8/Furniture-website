import Pagination from "@/components/products/Pagination";
import ProductFilter from "@/components/products/ProductFilter";
import { filterList, products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { useState } from "react";

// list of IDs of categories and types for the page loaded at the first time
const initialFilters = {
  selectedCategories: [],
  selectedTypes: [],
};

interface FilterState {
  selectedCategories: string[];
  selectedTypes: string[];
}

function Product() {
  // 3. State to hold the products that match the current filters
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [selectedFilters, setSelectedFilters] =
    useState<FilterState>(initialFilters);

  // 4. Function to handle filter submission from the child component
  const handleFilterSubmit = (filters: {
    selectedCategories: string[];
    selectedTypes: string[];
  }) => {
    // Logic to update state and filter products goes here...
    setSelectedFilters(filters);

    console.log(selectedFilters);

    // 4b. Filter the original products array based on the new selections
    const filteredProducts = products.filter((product) => {
      // Condition A: Is the product's category ID in the selected list?
      const isCategoryMatch =
        filters.selectedCategories.length === 0 || // <--- ADD THIS CHECK
        filters.selectedCategories.includes(product.categoryId);

      // Condition B: Is the product's type ID in the selected list? (Assumes product.typeId exists)
      const isTypeMatch =
        filters.selectedTypes.length === 0 || // <--- ADD THIS CHECK
        filters.selectedTypes.includes(product.typeId);
      // A product must satisfy BOTH category AND type criteria to be displayed
      return isCategoryMatch && isTypeMatch;
    });

    // 4c. Update the displayed products state
    console.log(filteredProducts);
    setDisplayedProducts(filteredProducts);
  };
  return (
    <div className="container mx-auto mb-8">
      <section className="flex flex-col lg:flex-row">
        <section className="felx ml-4 w-full flex-col md:w-full md:flex-row lg:ml-0 lg:w-1/5">
          <ProductFilter
            filterList={filterList}
            onSubmit={handleFilterSubmit}
            initialFilters={initialFilters}
          />
        </section>
        <section className="ml-4 w-full lg:ml-0 lg:w-4/5">
          <h3 className="my-8 ml-4 text-3xl font-bold">All Products</h3>
          <div className="mb-8 grid grid-cols-1 gap-6 gap-y-12 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {displayedProducts.map((product) => (
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
