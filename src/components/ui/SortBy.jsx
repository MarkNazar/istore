import { useSearchParams } from "react-router-dom";

const SortBy = ({ options, filterField }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";
  const handleChange = (e) => {
    const value = e.target.value;
    searchParams.set(filterField, value);
    if (!value) searchParams.delete(filterField);
    setSearchParams(searchParams);
  };
  return (
    <select
      className="border border-gray-200 p-2"
      onChange={handleChange}
      value={sortBy}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default SortBy;
