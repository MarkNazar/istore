import Spinner from "../../components/ui/Spinner";
import ProductCard from "./ProductCard";
import useFetchFeaturedProducts from "./useFetchFeaturedProducts";

const FeaturedProducts = () => {
  const { products, isLoading, error } = useFetchFeaturedProducts();

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  return (
    <ul className="grid grod-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default FeaturedProducts;
