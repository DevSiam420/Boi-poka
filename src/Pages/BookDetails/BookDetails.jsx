import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AddToStoreDB } from "../../Utility/AddToDB";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const bookId = parseInt(id);
  const FindedBook = data.find((book) => book.bookId === bookId);

  const [isRead, setIsRead] = useState(false);

  // check if already read (permanent)
  useEffect(() => {
    const storedReadBooks =
      JSON.parse(localStorage.getItem("read-books")) || [];
    if (storedReadBooks.includes(bookId)) {
      setIsRead(true);
    }
  }, [bookId]);

  const HandleMarkAsRead = (id) => {
    AddToStoreDB(id);
    setIsRead(true);
  };

  // ❗ Safety check
  if (!FindedBook) {
    return (
      <div className="w-full my-15 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 h-[60vh] md:h-[70vh]">
        <div className="relative max-w-4xl w-full text-center rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-2xl p-12 shadow-[0_0_80px_rgba(168,85,247,0.35)] animate-fadeIn">
          <div className="text-7xl mb-5 animate-float">📘</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Book Not Found
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            The book you’re looking for doesn’t exist or was removed.
          </p>
        </div>
      </div>
    );
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
        {/* Image */}
        <div className="flex justify-center">
          <div className="bg-gray-100 rounded-xl p-6">
            <img
              src={image}
              alt={bookName}
              className="w-[260px] object-contain"
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-serif font-semibold">{bookName}</h1>

          <p className="text-sm text-gray-600">
            By : <span className="font-medium">{author}</span>
          </p>

          <p className="text-sm font-medium text-gray-700">{category}</p>

          <p className="text-sm text-gray-600">
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

          {/* Meta */}
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
            <button
              onClick={() => HandleMarkAsRead(bookId)}
              disabled={isRead}
              className={`px-6 py-2 border rounded-lg text-sm transition
                ${
                  isRead
                    ? "bg-green-500 text-white border-green-500 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
            >
              {isRead ? "Read Already ✓" : "Read"}
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
