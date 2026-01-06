import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  return (
    <Link to={`/BookDetails/${singleBook.bookId}`} className="w-full">
      <div
        className="
          w-full
          sm:max-w-[260px]
          rounded-xl
          border border-gray-200
          bg-white
          p-4
          shadow-sm
          transition
          hover:shadow-md
          hover:-translate-y-1
        "
      >
        {/* Image */}
        <div className="bg-gray-100 rounded-lg flex justify-center items-center p-3">
          <img
            src={singleBook.image}
            alt={singleBook.bookName}
            className="h-28 sm:h-32 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="mt-3 text-base font-semibold text-gray-900 line-clamp-2">
          {singleBook.bookName}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mt-1">
          By <span className="font-medium">{singleBook.author}</span>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-600">Fiction</span>

          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{singleBook.rating}</span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
