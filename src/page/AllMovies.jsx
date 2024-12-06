import React from "react";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";


const AllMovies = () => {

    AOS.init({ duration: 3000 });

  const movies = useLoaderData();
  return (
    
   <div>
   
     <div className="container mx-auto p-5 py-5">

        <div  className="  rounded-xl object-cover 
            mix-blend-luminosity flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center bg-[url(https://i.ytimg.com/vi/iAPSvgjCkuQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDiTYqYgF2jWNMm4yghmeI1QAdn6Q)]">
          <h1 data-aos="fade-up" className="text-3xl  md:text-6xl font-extrabold text-white  "> C O M M I N G . . . . . . .</h1>
        </div>
       
       <div className="text-3xl font-bold my-10 text-center">All Movies : {movies.length}</div>
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
                 <button className="btn hover:text-white hover:bg-black ">Details</button>
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
