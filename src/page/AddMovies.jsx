import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const AddMovies = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove= (value, index) =>
    console.log(value, index);


  return (
    <div>
      <div className="container mx-auto  p-5  flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="  sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold ">
            <span className="text-indigo-600"> Add Movie</span> In ChinemaPro
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto border-2 rounded-lg bg-indigo-100 shadow-lg  p-10   sm:w-full sm:max-w-2xl">
          <form method="POST" className="space-y-6">
            {/* 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Poster
                </label>
                <div className="mt-2">
                  <input
                    id="poster"
                    name="poster"
                    type="text"
                    required
                    autoComplete="poster"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    autoComplete="title"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Genre
                </label>
                <div className="mt-2">
                  <select
                    className=" h-9 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    required
                  >
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Drama</option>
                    <option>Horror</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Duration
                </label>
                <div className="mt-2">
                  <input
                    id="number"
                    name="duration"
                    type="number"
                    required
                    autoComplete="number"
                    className="block  w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Release Year
                </label>
                <div className="mt-2">
                  <select
                    className="h-9 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    required
                  >
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Rating
                </label>
                <div className="mt-2">
                <div className="app">
                <Rating
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    size={10}
                    fillColor="gold"
                    emptyColor="lightgray"
                    transition
                  />
                </div>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovies;
