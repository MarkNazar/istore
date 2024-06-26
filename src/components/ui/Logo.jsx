import { Link } from "react-router-dom";

const Logo = ({ variation = "dark" }) => {
  return (
    <div
      className={`flex align-top ${
        variation === "light" ? "text-white" : "text-slate-800"
      } font-extrabold`}
    >
      <Link to="/">
        <h2 className="text-3xl">Istore</h2>
      </Link>
      <span className="text-sm ">+</span>
    </div>
  );
};

export default Logo;
