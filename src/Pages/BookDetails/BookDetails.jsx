import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const bookId = parseInt(id);
  const FindedBook = data.find((book) => book.bookId === bookId);

  // Safety check (VERY IMPORTANT)
  if (!FindedBook) {
    return <div className="text-center py-20 text-red-500">Book not found</div>;
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = FindedBook;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-sm border p-6">
        {/* Left: Image */}
        <div className="flex justify-center">
          <div className="bg-gray-100 rounded-xl p-6">
            <img
              src={image}
              alt={bookName}
              className="w-[260px] object-contain"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-serif font-semibold">{bookName}</h1>

          <p className="text-sm text-gray-600">
            By : <span className="font-medium">{author}</span>
          </p>

          <p className="text-sm font-medium text-gray-700">{category}</p>

          {/* Review */}
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold">Review :</span> {review}
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr />

          {/* Meta Info */}
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-medium">Number of Pages :</span>{" "}
              {totalPages}
            </p>
            <p>
              <span className="font-medium">Publisher :</span> {publisher}
            </p>
            <p>
              <span className="font-medium">Year of Publishing :</span>{" "}
              {yearOfPublishing}
            </p>
            <p>
              <span className="font-medium">Rating :</span> ⭐ {rating}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-2 border rounded-lg text-sm hover:bg-gray-100 transition">
              Read
            </button>
            <button className="px-6 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-600 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
