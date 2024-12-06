import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { Link, useLoaderData, useParams } from "react-router-dom";

const MovieDetails = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto p-5 my-5 ">
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <img className="rounded-2xl h-fit w-full" src={data.poster} alt="" />{" "}
        </div>
        <div className="space-y-3">
        <h2 className="card-title  font-bold md:text-2xl ">{data.title}</h2>
               <p className="text-slate-500">{data.genre}</p>
               <p> <span className="font-bold">Duration :</span> {data.duration} Min</p>
               <p> <span  className="font-bold">Release Year : </span>{data.year}</p>
               <p> <span  className="font-bold"> Rating : </span>{data.rating}</p> 

               <p> <span  className="font-bold"> Email : </span>{data.email}</p> 
              
               <div> <div className="font-bold">Summary : </div>
                {data.summary} </div>

                 
              <div className="flex justify-between gap-10 pt-10">
              <div className="card-actions justify-start">
                 <Link className="btn hover:text-white hover:bg-black "> <span><GrFavorite /></span> Favorite</Link>
               </div>
               <div className="card-actions justify-start">
                 <Link className="btn hover:text-white hover:bg-black "> <span><RxUpdate /></span> Update</Link>
               </div>
               <div className="card-actions justify-start">
                 <Link className="btn text-red-600 hover:text-white hover:bg-black  "><span><AiOutlineDelete /></span> Delete</Link>
               </div>
              </div>
        </div>
       
      </div>
     
    </div>
  );
};

export default MovieDetails;
