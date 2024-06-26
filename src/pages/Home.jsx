import { Link } from "react-router-dom";
import HeadingLine from "../components/ui/HeadingLine";
import FeaturedProducts from "../features/products/FeaturedProducts";
import Categories from "../features/categories/Categories";

const Home = () => {
  return (
    <main>
      <section className="mt-[60px] flex items-center justify-center h-dvh bg-[url('/home-banner.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className="text-center text-white uppercase">
          <h5 className="sm:text-[24px]">It has finally started...</h5>
          <h2 className="text-[40px] sm:text-[90px] font-bold">Huge Sale</h2>
          <h3 className="text-[20px] sm:text-[40px] font-bold">Up to 70%</h3>
          <div className="flex sm:flex-row flex-col  items-center justify-center gap-4 sm:gap-6 mt-8">
            <Link
              to="/products/category/men's clothing"
              className="w-full sm:w-auto px-4 py-2 border-2 border-white hover:bg-white hover:text-slate-800 transition-all duration-300"
            >
              Shop Men
            </Link>
            <Link
              to="/products/category/women's clothing"
              className="w-full sm:w-auto px-4 py-2 border-2 border-white hover:bg-white hover:text-slate-800 transition-all duration-300"
            >
              Shop Women
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto px-4 py-2 border-2 border-white hover:bg-white hover:text-slate-800 transition-all duration-300"
            >
              Shop All
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1400px] px-4 py-16 mx-auto">
          <HeadingLine text="Weekly Featured Products" />
          <FeaturedProducts />
        </div>
      </section>

      <section>
        <div className="max-w-[1400px] px-4 py-16 mx-auto">
          <HeadingLine text="Browse our categories" />
          <Categories />
        </div>
      </section>
    </main>
  );
};

export default Home;
