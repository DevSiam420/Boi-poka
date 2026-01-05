import React from "react";
import BannerImage from "../../../Image/books.jpg";
const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-10 lg:px-10 lg:py-10">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 bg-indigo-100 rounded-full">
            📚 Curated Collection
          </span>

          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
            Books to <span className="text-indigo-600">Freshen</span>
            <br />
            Up Your Bookshelf
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg">
            Elevate your reading corner with hand-picked books that inspire
            creativity, knowledge, and timeless wisdom.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              View The List
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute inset-0 bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>

          <img
            src={BannerImage}
            alt="Books Banner"
            className="relative w-full max-w-md lg:max-w-xl rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
