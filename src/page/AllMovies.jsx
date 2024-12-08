import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AllMovies = () => {
  AOS.init({ duration: 2000 });

  const loadMovies = useLoaderData();
  const [movies, setMovies] = useState(loadMovies);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetch(`http://localhost:5000/allmovies?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) =>setMovies (data));
  }, [search]);

  return (
    <div>
      <div className="container mx-auto p-5 py-5">
        <div
          className="  rounded-xl object-cover 
            mix-blend-luminosity flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center bg-[url(https://i.ytimg.com/vi/iAPSvgjCkuQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDiTYqYgF2jWNMm4yghmeI1QAdn6Q)]"
        >
          <h1
            data-aos="fade-up"
            className="text-3xl  md:text-6xl font-extrabold text-white  "
          >
            {" "}
            C O M M I N G . . . . . . .
          </h1>
        </div>

        <div className="flex justify-between items-center">
          {" "}
          <h1 className="text-3xl font-bold my-10 text-center">
            All Movies : {movies.length}
          </h1>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                name="search"
                className="grow"
                placeholder="Search Movie"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {movies.map((movie, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="card grid grid-cols-2 gap-8 card-side  shadow-xl"
            >
              <figure>
                <img
                  className="max-h-96 w-fit "
                  src={movie.poster}
                  alt="Movie"
                />
              </figure>
              <div className="flex items-center">
                <div className="space-y-3">
                  <h2 className="card-title space-y-4 font-bold md:text-2xl ">
                    {movie.title}
                  </h2>
                  <p className="text-slate-500">{movie.genre}</p>
                  <p>
                    {" "}
                    <span className="font-bold">Duration :</span>{" "}
                    {movie.duration} Min
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold">Release Year : </span>
                    {movie.year}
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold"> Rating : </span>
                    {movie.rating}
                  </p>
                  <div className="card-actions justify-start">
                    <Link
                      to={`movieDetails/${movie._id}`}
                      className="btn hover:text-white hover:bg-black "
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
