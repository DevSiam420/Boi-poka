import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AddToStoreDB, GetStoredData } from "../../Utility/AddToDB";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const bookId = Number(id);
  const FindedBook = data.find((book) => book.bookId === bookId);

  const [isRead, setIsRead] = useState(false);

  // ✅ Check read status (PERMANENT)
  useEffect(() => {
    const storedReadBooks = GetStoredData();
    setIsRead(storedReadBooks.includes(bookId));
  }, [bookId]);

  const HandleMarkAsRead = () => {
    const added = AddToStoreDB(bookId);
    if (added) setIsRead(true);
  };

  // ❗ Safety check
  if (!FindedBook) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          📘 Book Not Found
        </h1>
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
    <div className="px-4 py-10 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617] ">
      {/* Glass Container */}
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-5 lg:p-6">
          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Soft glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/30 blur-lg opacity-70 group-hover:opacity-100 transition" />

              <div className="relative card bg-white/15 backdrop-blur-xl rounded-3xl p-3 shadow-xl transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src={image}
                  alt={bookName}
                  className="w-56 sm:w-60 md:w-64 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-between text-white">
            <div className="space-y-3">
              {/* Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold leading-snug">
                  {bookName}
                </h1>
                <p className="text-white/60 text-sm mt-0.5">
                  by <span className="font-semibold text-white">{author}</span>
                </p>
              </div>

              {/* Category */}
              <span className="badge badge-outline border-white/30 text-white">
                {category}
              </span>

              {/* Review */}
              <p className="text-sm text-white/80 leading-relaxed">
                <span className="font-semibold text-white">Review:</span>{" "}
                {review}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge badge-sm bg-emerald-400/20 text-emerald-300 border border-emerald-400/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-white/75 border-t border-white/15 pt-3">
                <p>
                  <span className="text-white font-medium">Pages:</span>{" "}
                  {totalPages}
                </p>
                <p>
                  <span className="text-white font-medium">Rating:</span> ⭐{" "}
                  {rating}
                </p>
                <p>
                  <span className="text-white font-medium">Publisher:</span>{" "}
                  {publisher}
                </p>
                <p>
                  <span className="text-white font-medium">Year:</span>{" "}
                  {yearOfPublishing}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <button
                onClick={HandleMarkAsRead}
                disabled={isRead}
                className={`btn btn-sm rounded-full px-6 font-semibold transition-all
              ${
                isRead
                  ? "btn-success text-white cursor-not-allowed"
                  : "btn-outline border-white/30 text-white hover:bg-white/20 hover:scale-105"
              }
            `}
              >
                {isRead ? "✔ Read Already" : "Mark as Read"}
              </button>

              <button
                className="btn btn-sm rounded-full px-6 font-semibold text-white
              bg-gradient-to-r from-sky-500 to-indigo-600
              shadow-md hover:shadow-indigo-500/40 hover:scale-105 transition"
              >
                + Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
