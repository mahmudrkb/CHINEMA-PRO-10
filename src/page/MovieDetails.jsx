import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { Link, Navigate, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const MovieDetails = () => {

  const navigate=useNavigate()
  const loadedMovie = useLoaderData();

  const [movies, setMovie] = useState(loadedMovie);

  const { _id, poster, title, genre, duration, year, rating, email, summary } =
    movies;

  
  
  const handleDelete = () => {
    console.log("this is delete");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allmovies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Movie has been deleted.",
              icon: "success",
            });

          navigate("/allMovies")
          
          });
      }
    });
  };

  const handleAddFavorite = () => {
    console.log("work itt");
  };

 
  return (
    <div className="container mx-auto p-5 my-5 ">
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <img className="rounded-2xl h-fit w-full" src={poster} alt="" />{" "}
        </div>
        <div className="space-y-3">
          <h2 className="card-title  font-bold md:text-2xl ">{title}</h2>
          <p className="text-slate-500">{genre}</p>
          <p>
            {" "}
            <span className="font-bold">Duration :</span> {duration} Min
          </p>
          <p>
            {" "}
            <span className="font-bold">Release Year : </span>
            {year}
          </p>
          <p>
            {" "}
            <span className="font-bold"> Rating : </span>
            {rating}
          </p>

          <p>
            {" "}
            <span className="font-bold"> Email : </span>
            {email}
          </p>

          <div>
            {" "}
            <div className="font-bold">Summary : </div>
            {summary}{" "}
          </div>

          <div className="flex justify-between gap-10 pt-10">
            <div className="card-actions justify-start">
              <Link
                onClick={handleAddFavorite}
                className="btn hover:text-white hover:bg-black "
              >
                {" "}
                <span>
                  <GrFavorite />
                </span>{" "}
                Favorite
              </Link>
            </div>
            <div className="card-actions justify-start">
              <Link className="btn hover:text-white hover:bg-black ">
                {" "}
                <span>
                  <RxUpdate />
                </span>{" "}
                Update
              </Link>
            </div>
            <div className="card-actions justify-start">
              <Link
                
                onClick={handleDelete}
                className="btn text-red-600 hover:text-white hover:bg-black  "
              >
                <span>
                  <AiOutlineDelete />
                </span>{" "}
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
