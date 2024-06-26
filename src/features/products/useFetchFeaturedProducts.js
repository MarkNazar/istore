import { useQuery } from "react-query";
import { fetchFeaturedProducts } from "../../services/apiProducts";

const useFetchFeaturedProducts = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryFn: fetchFeaturedProducts,
    queryKey: ["featured-products"],
  });

  return { isLoading, error, products };
};

export default useFetchFeaturedProducts;
