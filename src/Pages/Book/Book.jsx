import React from "react";

const Book = ({ singleBook }) => {
  return (
    <div
      className="
    group
    w-full max-w-[260px]
    rounded-xl
    border border-gray-200
    bg-white
    p-4
    shadow-sm
    transition-all duration-500 ease-out
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:border-gray-300
    hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]
  "
    >
      {/* Image */}
      <div className="bg-gray-100 rounded-lg flex justify-center items-center p-5 overflow-hidden">
        <img
          src={singleBook.image}
          alt={singleBook.bookName}
          className="
        h-28 sm:h-32 object-contain
        transition-transform duration-500 ease-out
        group-hover:scale-110
      "
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
          Young Adult
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
          Identity
        </span>
      </div>

      {/* Title */}
      <h2
        className="
      mt-3
      text-base sm:text-lg
      font-bold
      text-gray-900
      line-clamp-2
      transition-colors duration-300
      group-hover:text-gray-700
    "
      >
        {singleBook.bookName}
      </h2>

      {/* Author */}
      <p className="text-sm text-gray-500 mt-1">
        By <span className="font-medium">{singleBook.author}</span>
      </p>

      {/* Divider */}
      <div className="border-t border-dashed my-4"></div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Fiction</span>

        <div className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">
            {singleBook.rating}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="
          w-4 h-4 text-yellow-400
          transition-transform duration-300
          group-hover:scale-110
        "
          >
            <path d="M11.48 3.5a.56.56 0 011.04 0l2.12 5.11a.56.56 0 00.48.35l5.52.44a.56.56 0 01.32.99l-4.2 3.6a.56.56 0 00-.18.56l1.28 5.38a.56.56 0 01-.84.61l-4.72-2.88a.56.56 0 00-.59 0l-4.72 2.88a.56.56 0 01-.84-.61l1.28-5.38a.56.56 0 00-.18-.56l-4.2-3.6a.56.56 0 01.32-.99l5.52-.44a.56.56 0 00.48-.35L11.48 3.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Book;
