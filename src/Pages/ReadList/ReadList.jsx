import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

// React Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { GetStoredData } from "../../Utility/AddToDB";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  // ---- Load Read List from localStorage ----
  useEffect(() => {
    if (!data || data.length === 0) return;

    const storedAllData = GetStoredData(); // [ "1", "3", "5" ]
    const convertedIds = storedAllData.map((id) => Number(id)); // [1,3,5]

    const myReadList = data.filter((book) =>
      convertedIds.includes(book.bookId)
    );

    setReadList(myReadList);
  }, [data]);

  return (
    <div className="my-10 flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-2xl">
        <div className="rounded-2xl bg-white/90 backdrop-blur-xl p-6">
          <Tabs>
            {/* ---------- TAB LIST ---------- */}
            <TabList className="flex justify-center gap-4 mb-8">
              <Tab
                className="cursor-pointer px-8 py-3 text-sm md:text-base font-semibold rounded-full 
                bg-gray-100 text-gray-600 transition-all duration-300 
                hover:bg-indigo-100 hover:text-indigo-600 focus:outline-none"
                selectedClassName="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
              >
                📘 Readlist Book : ({readList.length})
              </Tab>

              <Tab
                className="cursor-pointer px-8 py-3 text-sm md:text-base font-semibold rounded-full 
                bg-gray-100 text-gray-600 transition-all duration-300 
                hover:bg-pink-100 hover:text-pink-600 focus:outline-none"
                selectedClassName="bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105"
              >
                💖 Wishlist Book
              </Tab>
            </TabList>

            {/* ---------- TAB PANEL : READ LIST ---------- */}
            <TabPanel>
              <div
                className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 
                  p-4 sm:p-6 shadow-inner space-y-4"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-indigo-600">
                  📚 Your Read Books
                </h2>

                {readList.length === 0 ? (
                  <p className="text-red-500 font-bold">No books read yet.</p>
                ) : (
                  readList.map((book) => (
                    <div key={book.bookId} className="max-w-5xl mx-auto">
                      {/* Card */}
                      <div
                        className="
            flex flex-col sm:flex-row
            bg-base-100 shadow-xl hover:shadow-2xl
            transition-all duration-300
            rounded-2xl p-4 gap-4
          "
                      >
                        {/* Image */}
                        <figure
                          className="
              w-full sm:w-36 md:w-44
              flex justify-center
            "
                        >
                          <img
                            src={book.image}
                            alt={book.bookName}
                            className="
                  rounded-xl object-cover
                  w-32 sm:w-full
                  h-44 sm:h-48
                "
                          />
                        </figure>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                            {book.bookName}
                          </h2>

                          <p className="text-sm text-gray-500">
                            By{" "}
                            <span className="font-medium">{book.author}</span>
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {Array.isArray(book.tags) ? (
                              book.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="badge badge-outline badge-info text-xs sm:text-sm"
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="badge badge-outline badge-info">
                                {book.tags}
                              </span>
                            )}
                          </div>

                          {/* Meta Info */}
                          <div
                            className="
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                gap-2 text-xs sm:text-sm text-gray-500 mt-3
              "
                          >
                            <p>📅 Year: {book.yearOfPublishing}</p>
                            <p>📖 Pages: {book.totalPages}</p>
                            <p>🏢 Publisher: {book.publisher}</p>
                          </div>

                          {/* Bottom Actions */}
                          <div
                            className="
                flex flex-col sm:flex-row
                sm:items-center sm:justify-between
                gap-3 mt-4
              "
                          >
                            <div className="flex flex-wrap gap-2">
                              <span className="badge badge-primary text-xs sm:text-sm">
                                Category: {book.category}
                              </span>
                              <span className="badge badge-warning text-xs sm:text-sm">
                                ⭐ {book.rating}
                              </span>
                            </div>

                            <button
                              className="
                  btn btn-success btn-sm
                  rounded-full px-6 w-full sm:w-auto
                "
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </TabPanel>

            {/* ---------- TAB PANEL : WISHLIST ---------- */}
            <TabPanel>
              <div className="rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 p-6 shadow-inner">
                <h2 className="text-2xl font-bold text-pink-600 mb-2">
                  💕 Wishlist Books
                </h2>
                <p className="text-gray-600">
                  Books you want to read in the future will be saved here.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
