export const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const fetchFeaturedProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=4");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const fetchProduct = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};
