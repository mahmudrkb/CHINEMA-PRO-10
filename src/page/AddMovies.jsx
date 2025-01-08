import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddMovies = () => {
  const navigate = useNavigate();
  console.log(location);

  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) =>
    console.log(`Pointer moved. Value: ${value}, Index: ${index}`);

  const handleAddMovies = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const year = form.year.value;
    // const rating=form.rating.value
    const summary = form.summary.value;
    const email = form.email.value;

    const newMovie = {
      poster,
      title,
      genre,
      duration,
      year,
      rating,
      summary,
      email,
    };

    console.log(newMovie);

    if (!poster || !poster.match(/^https?:\/\/.+/)) {
      toast.error("Poster must be a valid URL.", {
        position: "top-center",
      });
      return false;
    }
    if (!title || title.length < 2) {
      toast.error("Title must have at least 2 characters.", {
        position: "top-center",
      });

      return false;
    }
    if (!genre) {
      toast.error("Please select a genre.", {
        position: "top-center",
      });

      return false;
    }
    if (!duration || duration <= 60) {
      toast.error("Duration must be greater than 60 minutes.", {
        position: "top-center",
      });

      return false;
    }
    if (!year) {
      toast.error("Please select a release year.", {
        position: "top-center",
      });

      return false;
    }
    if (!rating) {
      toast.error("Please select a rating.", {
        position: "top-center",
      });

      return false;
    }
    if (!summary || summary.length < 10) {
      toast.error("Summary must have at least 10 characters.", {
        position: "top-center",
      });

      return false;
    }

    // server side connect

    fetch(
      "https://assignment-10-server-m3ps2masc-al-mahmud-rakibs-projects.vercel.app/addMovies",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newMovie),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Movie has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(data.insertedId ? "/allMovies" : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div>
      <div className="container mx-auto  p-5  flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="  sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold ">
            <span className="text-indigo-600"> Add Movie</span> In ChinemaPro
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto border-2 rounded-lg bg-indigo-100 shadow-lg  p-10   sm:w-full sm:max-w-2xl">
          <form onSubmit={handleAddMovies} method="POST" className="space-y-6">
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

            {/* 3 */}
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
                    name="genre"
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

            {/* 5 */}
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
                    name="year"
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
              <div className="">
                <label
                  htmlFor="text"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Rating
                </label>
                <div className="mt-2">
                  <div className=" ">
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                      size={30}
                      fillColor="gold"
                      emptyColor="lightgray"
                      transition
                      required
                      name="rating"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 6 */}

            <div>
              <label
                htmlFor="text"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Summary
              </label>
              <div className="mt-2">
                <textarea
                  name="summary"
                  className="textarea textarea-bordered block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Text here"
                  required
                ></textarea>
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
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
