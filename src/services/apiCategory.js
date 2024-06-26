export const fetchCategories = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
