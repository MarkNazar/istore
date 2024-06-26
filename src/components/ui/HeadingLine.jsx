const HeadingLine = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      <div className="h-[.8px] bg-gray-200 flex-1"></div>
      <h2 className="text-center uppercase text-xl font-bold">{text}</h2>
      <div className="h-[.8px] bg-gray-200 flex-1"></div>
    </div>
  );
};

export default HeadingLine;
