import React, { useState } from "react";

import { MdFolderDelete, MdOutlineDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Favorite = () => {
  const loadMovies = useLoaderData();
const [movies,setMovies]=useState(loadMovies)
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/favorites/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Movie has been deleted.",
              icon: "success",
            });
            const updatedMovies = movies.filter((movie) => movie._id !== id);
            setMovies(updatedMovies);
            
          });
         
      }
    });
  };
  return (
    <div className="mt-16 h-screen">
      <div>
        <div className="text-3xl font-bold my-10 text-center">
          Favorite Movies : {movies.length}
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Movie Create by</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={movie.poster}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{movie.title}</div>
                          <div className="text-sm opacity-50">
                            {movie.genre}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{movie.email}</td>
                    <td>
                      {" "}
                      <button className="text-red-600"
                        onClick={() => {
                          handleDelete(movie._id);
                        }}
                      >
                       <MdOutlineDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
