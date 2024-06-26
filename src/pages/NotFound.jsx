import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="mt-[60px] px-4 py-10 sm:p-20 text-center sm:text-left">
      <div className="max-w-[800px] min-h-[300px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
        <div>
          <p className="text-[100px] font-bold text-gray-300">404</p>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">
            Oops! That page can&apos;t be found.
          </p>
          <p className="mb-2">
            It looks like nothing was found at this location.{" "}
          </p>
          <Link
            to="/"
            className="flex items-center justify-center sm:justify-start gap-2"
          >
            Back to homepage <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
