import { useQuery } from "react-query";
import { fetchCategories } from "../../services/apiCategory";

const useFetchCategories = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryFn: fetchCategories,
    queryKey: ["categories"],
  });

  return { categories, isLoading, error };
};

export default useFetchCategories;
