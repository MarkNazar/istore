import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../services/apiProducts";

const useFetchProduct = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => fetchProduct(id),
    queryKey: ["product", id],
  });
  return { isLoading, product, error };
};

export default useFetchProduct;
