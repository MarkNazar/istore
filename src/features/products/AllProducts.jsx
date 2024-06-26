import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import ProductsOperations from "../products/ProductsOperations";
import useFetchProducts from "./useFetchProducts";
import useFetchCategories from "../categories/useFetchCategories";
import { useState } from "react";

import Spinner from "../../components/ui/Spinner";

const AllProducts = () => {
  const [productCategory, setProductCategory] = useState("");
  const {
    products,
    isLoading: isProductsLoading,
    error: errorProducts,
    category: currentCategory,
  } = useFetchProducts();
  const {
    categories,
    isLoading: isCategoriesLoading,
    error: errorCategories,
  } = useFetchCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortValue = searchParams.get("sortBy") || "";
  const [field, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedProducts =
    field === "name"
      ? products?.sort((a, b) => a.title.localeCompare(b.title) * modifier)
      : field === "price"
      ? products?.sort((a, b) => (+a[field] - +b[field]) * modifier)
      : products?.sort((a, b) => (+a.rating.rate - +b.rating.rate) * modifier);

  const categoryValue = searchParams.get("category");

  //   console.log(sortedProducts);

  const filteredProducts = sortedProducts?.filter((product) =>
    searchParams.get("category") ? product.category === categoryValue : true
  );

  const isWorking = isProductsLoading || isCategoriesLoading;

  if (isWorking)
    return (
      <div className="flex items-center justify-center mt-[60px] px-4 min-h-60">
        <Spinner />
      </div>
    );

  const handleChangeCategory = (category) => {
    searchParams.set("category", category);
    if (!category) searchParams.delete("category");
    setSearchParams(searchParams);
  };
  return (
    <main className="mt-[60px] container mx-auto p-4">
      <section className="flex flex-col md:flex-row gap-8 md:gap-4">
        <aside className="w-full md:w-[20%]">
          <h1 className="uppercase font-bold text-xl mb-6">
            {currentCategory}
          </h1>
          <div>
            <p className="uppercase font-bold mb-4">Browse</p>
            <div className="flex flex-wrap md:flex-col uppercase text-sm gap-2">
              <button
                className="text-left"
                onClick={() => handleChangeCategory("")}
              >
                all
              </button>
              {categories.map((category) => {
                return (
                  <button
                    className="text-left"
                    key={category}
                    onClick={() => handleChangeCategory(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
        <div className=" flex-1">
          <div className="flex items-center justify-start flex-wrap md:justify-end gap-4 mb-10 md:mb-6">
            <div>Showing all {products.length} results</div>
            <ProductsOperations />
          </div>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllProducts;
