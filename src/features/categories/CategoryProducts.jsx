import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import useFetchProductByCategory from "../products/useFetchProductByCategory";
import useFetchCategories from "./useFetchCategories";
import ProductsOperations from "../products/ProductsOperations";

import Spinner from "../../components/ui/Spinner";

const CategoryProducts = () => {
  const {
    products,
    isLoading: isProductsLoading,
    error: errorProducts,
    category: currentCategory,
  } = useFetchProductByCategory();
  const {
    categories,
    isLoading: isCategoriesLoading,
    error: errorCategories,
  } = useFetchCategories();

  const [searchParams] = useSearchParams();

  const sortValue = searchParams.get("sortBy") || "";
  const [field, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedProducts =
    field === "name"
      ? products?.sort((a, b) => a.title.localeCompare(b.title) * modifier)
      : field === "price"
      ? products?.sort((a, b) => (+a[field] - +b[field]) * modifier)
      : products?.sort((a, b) => (+a.rating.rate - +b.rating.rate) * modifier);

  const isWorking = isProductsLoading || isCategoriesLoading;

  if (isWorking)
    return (
      <div className="flex items-center justify-center mt-[60px] px-4 min-h-60">
        <Spinner />
      </div>
    );
  return (
    <main className="mt-[60px] container mx-auto p-4">
      <section className="flex flex-col md:flex-row gap-8 md:gap-4">
        <aside className="w-full md:w-[20%]">
          <h1 className="uppercase font-bold text-xl mb-6">
            {currentCategory}
          </h1>
          <div>
            <p className="uppercase font-bold mb-4">Browse</p>
            <ul className="flex flex-wrap md:flex-col uppercase text-sm gap-2">
              {categories.map((category) => {
                return category === currentCategory ? (
                  <h5 key={category} className=" text-amber-600">
                    {category}
                  </h5>
                ) : (
                  <Link key={category} to={`/products/category/${category}`}>
                    {category}
                  </Link>
                );
              })}
            </ul>
          </div>
        </aside>
        <div className=" flex-1">
          <div className="flex items-center justify-start flex-wrap md:justify-end gap-4 mb-10 md:mb-6">
            <div>Showing all {products.length} results</div>
            <ProductsOperations />
          </div>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sortedProducts.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryProducts;
