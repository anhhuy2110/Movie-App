import React from "react";

const PaginateIndicator = () => {
  return (
    <div className="movie-slider absolute right-30 bottom-[8%]">
      <ul className="flex gap-3">
        <li className="h-3 w-16 cursor-pointer bg-slate-100"></li>
        <li className="h-3 w-16 cursor-pointer bg-slate-600"></li>
        <li className="h-3 w-16 cursor-pointer bg-slate-600"></li>
        <li className="h-3 w-16 cursor-pointer bg-slate-600"></li>
      </ul>
    </div>
  );
};

export default PaginateIndicator;
