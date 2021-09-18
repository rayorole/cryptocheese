import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="w-11/12 mb-3 p-2 skeleton-border animate-pulse rounded-lg shadow-lg">
      <div className="flex font-josefin items-center text-gray-100">
        <div className="skeleton-card rounded-md"></div>
        <div className="ml-3 text-xl rounded-lg skeleton-bg w-24 h-7" />
      </div>
      <div className="flex items-center w-full font-josefin text-gray-100 justify-between mt-3">
        <div className="w-full h-10 rounded-lg skeleton-bg"></div>
      </div>
    </div>
  );
}
