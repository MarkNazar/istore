import Spinner from "../../components/ui/Spinner";
import CategoryCard from "./CategoryCard";
import useFetchCategories from "./useFetchCategories";

const Categories = () => {
  const { categories, isLoading, error } = useFetchCategories();

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  return (
    <ul
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${categories.length} gap-6 sm:gap-12`}
    >
      {categories.map((category) => (
        <CategoryCard key={category} category={category} />
      ))}
    </ul>
  );
};

export default Categories;
