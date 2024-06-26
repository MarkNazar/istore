import { HiOutlineStar } from "react-icons/hi";

const StarRating = ({ rating }) => {
  const { rate, count } = rating;
  return (
    <div className="flex items-center sm:justify-start justify-center">
      {Array.from({ length: 5 }, (_, i) => i).map((i) => {
        return (
          <HiOutlineStar
            key={i}
            className={`${rate >= i ? "fill-slate-800" : ""}`}
          />
        );
      })}
      <span className="inline-block ml-2 text-[12px] text-gray-400">
        {count} ratings
      </span>
    </div>
  );
};

export default StarRating;
