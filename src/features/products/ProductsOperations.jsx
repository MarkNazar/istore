import SortBy from "../../components/ui/SortBy";

const ProductsOperations = () => {
  return (
    <div>
      <SortBy
        filterField="sortBy"
        options={[
          { value: "", label: "Default sorting" },
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "price-asc", label: "Sort by price (low to high)" },
          { value: "price-desc", label: "Sort by price (high to low)" },
          { value: "rating-desc", label: "Sort rating" },
        ]}
      />
    </div>
  );
};

export default ProductsOperations;
