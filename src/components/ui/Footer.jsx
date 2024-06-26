import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className=" min-h-[200px] text-white">
      <section className="bg-gray-500">
        <div className="flex gap-8 lg:gap-20 container px-4 py-10 mx-auto flex-wrap lg:flex-nowrap">
          <div className="md:basis-[40%]">
            <h3 className="mb-2 font-bold text-lg">About Us</h3>
            <div className="h-[2px] w-6 bg-gray-300 mb-2"></div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              debitis dolores placeat atque quas nesciunt voluptatem autem
              cumque, fuga rerum.
            </p>
          </div>
          <div className="md:basis-[40%]">
            <h3 className="mb-2 font-bold text-lg">Tags</h3>
            <div className="h-[2px] w-6 bg-gray-300 mb-2"></div>
            <div className="flex gap-2 flex-wrap">
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                bag
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                classic
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                fit
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                jeans
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                jacket
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                casual
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                gold
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                diamond
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                2tb
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-md text-xs">
                ssd
              </span>
            </div>
          </div>
          <div className="md:basis-2/5">
            <h3 className="mb-2 font-bold text-lg">Signup for Newsletter</h3>
            <div className="h-[2px] w-6 bg-gray-300 mb-2"></div>
            <p className="mb-2">
              Signup to get news about Istore+. We don&apos;t spam!
            </p>
            <form>
              <input
                type="email"
                placeholder="email address"
                className="bg-transparent border-gray-300 border rounded-md w-full p-2 outline-none mb-2"
              />
              <button className="bg-amber-600 px-4 py-2 rounded-md text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-gray-600">
        <div className="flex gap-20 container px-4 py-5 mx-auto">
          <p>Copyright 2024 © Istore+</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
