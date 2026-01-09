import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AddToStoreDB, GetStoredData } from "../../Utility/AddToDB";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ===============================
   🚀 FUTURISTIC NEON TOAST
================================ */
const NeonToast = ({
  title,
  message,
  icon,
  color = "from-indigo-500 to-fuchsia-500",
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl w-[300px]">
      {/* glow bar */}
      <div
        className={`absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r ${color}`}
      />

      {/* glow background */}
      <div
        className={`absolute -inset-1 blur-xl opacity-40 bg-gradient-to-r ${color}`}
      />

      {/* content */}
      <div className="relative flex gap-3 items-start p-4 bg-[#0b1020]/90 backdrop-blur-xl border border-white/10 rounded-2xl text-white">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${color} shadow-lg`}
        >
          <span className="text-lg">{icon}</span>
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-semibold leading-none">{title}</h4>
          <p className="text-xs text-white/70 mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
};

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const bookId = Number(id);
  const FindedBook = data.find((book) => book.bookId === bookId);

  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    const storedReadBooks = GetStoredData();
    setIsRead(storedReadBooks.includes(bookId));
  }, [bookId]);

  /* 🔔 TOAST HELPER */
  const showToast = (props) => {
    toast(<NeonToast {...props} />, {
      autoClose: 2300,
      hideProgressBar: true,
      closeButton: false,
      className: "bg-transparent shadow-none p-0",
      bodyClassName: "p-0",
    });
  };

  const HandleMarkAsRead = () => {
    const added = AddToStoreDB(bookId);

    if (added) {
      setIsRead(true);
      showToast({
        title: "Marked as Read",
        message: "Book added to your read list",
        icon: "📘",
        color: "from-emerald-400 to-cyan-400",
      });
    } else {
      showToast({
        title: "Already Read",
        message: "You already completed this book",
        icon: "📗",
        color: "from-yellow-400 to-orange-500",
      });
    }
  };

  if (!FindedBook) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Book Not Found
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
    <>
      <div className="px-4 py-10 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617]">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5">
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={image}
                alt={bookName}
                className="w-60 rounded-2xl shadow-xl"
              />
            </div>

            {/* INFO */}
            <div className="text-white flex flex-col justify-between">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold">{bookName}</h1>
                <p className="text-white/60">by {author}</p>

                <span className="badge badge-outline text-white border-white/30">
                  {category}
                </span>

                <p className="text-sm text-white/80">{review}</p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span key={i} className="text-xs text-cyan-300">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 text-xs text-white/70 pt-3 border-t border-white/10">
                  <p>Pages: {totalPages}</p>
                  <p>Rating: ⭐ {rating}</p>
                  <p>Publisher: {publisher}</p>
                  <p>Year: {yearOfPublishing}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={HandleMarkAsRead}
                  disabled={isRead}
                  className={`btn btn-sm rounded-full px-6 ${
                    isRead
                      ? "btn-success"
                      : "btn-outline border-white/30 text-white"
                  }`}
                >
                  {isRead ? "✔ Read" : "Mark as Read"}
                </button>

                <button
                  onClick={() =>
                    showToast({
                      title: "Wishlist",
                      message: "Saved for later",
                      icon: "💖",
                      color: "from-pink-500 to-rose-500",
                    })
                  }
                  className="btn btn-sm rounded-full px-6 text-white bg-gradient-to-r from-pink-500 to-rose-500"
                >
                  + Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOAST ROOT */}
      <ToastContainer position="top-right" />
    </>
  );
};

export default BookDetails;
