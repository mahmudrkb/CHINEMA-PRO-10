import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Favorite = () => {
    const movies= useLoaderData();

   

    return (
        <div className='container p-5 my-5'>
               <div className="text-3xl font-bold my-10 text-center">Favorite Movies : {movies.length}</div>
       <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {movies.map((movie,index) => (
           <div data-aos="fade-up" key={index} className="card grid grid-cols-2 gap-8 card-side bg-base-100 shadow-xl">
             <figure>
               <img className="max-h-96 w-fit "
                 src={movie.poster}
                 alt="Movie"
               />
             </figure>
            <div className="flex items-center">
            <div className="space-y-3">
               <h2 className="card-title space-y-4 font-bold md:text-2xl ">{movie.title}</h2>
               <p className="text-slate-500">{movie.genre}</p>
               <p> <span className="font-bold">Duration :</span> {movie.duration} Min</p>
               <p> <span  className="font-bold">Release Year : </span>{movie.year}</p>
               <p> <span  className="font-bold"> Rating : </span>{movie.rating}</p>
               <div className="card-actions justify-start">
                 <Link className="btn hover:text-white hover:bg-black ">Delete Favorite</Link>
               </div>
             </div>
            </div>
           </div>
         ))}
       </div>
     </div>
     
    );
};

export default Favorite;