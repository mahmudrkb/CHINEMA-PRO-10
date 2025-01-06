import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";

const Featured = () => {
  AOS.init({ duration: 2000 });

  const [movies, useMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allmovies")
      .then((res) => res.json())
      .then((data) => useMovies(data));
  }, []);

  return (
    <div className="container mx-auto p-5 my-5">
      <h2 className=" text-center text-3xl md:text-4xl mb-16 md:mb-24">
        Movies Feature
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6)
          .map((movie, index) => (
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
                      to={`/allMovies/movieDetails/${movie._id}`}
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
      <div className="flex justify-end mt-10">
        <Link className="btn font-bold" to={"/allMovies"}>
          See All Movies <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Featured;
