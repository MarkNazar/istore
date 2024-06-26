import { useQuery } from "react-query";
import { fetchProductsByCategory } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

const useFetchProductByCategory = () => {
  const { category } = useParams();
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => fetchProductsByCategory(category),
    queryKey: ["products", category],
  });
  return { products, isLoading, error, category };
};

export default useFetchProductByCategory;
