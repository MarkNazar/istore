import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <li>
      <Link
        to={`/products/category/${category}`}
        className=" block p-10 bg-white uppercase font-bold text-lg sm:text-xl border-slate-200 border text-center h-full"
      >
        <h3>{category}</h3>
      </Link>
    </li>
  );
};

export default CategoryCard;
