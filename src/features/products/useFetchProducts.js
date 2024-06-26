import { useQuery } from "react-query";
import { fetchProducts } from "../../services/apiProducts";

const useFetchProducts = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  return { isLoading, error, products };
};

export default useFetchProducts;
