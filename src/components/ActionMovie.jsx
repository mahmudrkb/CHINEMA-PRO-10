import React from "react";
import Marquee from "react-fast-marquee";

const ActionMovie = () => {
  return (
    <div className=" dark:bg-[#434342] dark:text-white">
      <div className="container mx-auto p-5">
        <h1 className="  text-center text-3xl md:text-4xl my-10">TOP ACTION MOVIES IN THEATRES</h1>
        {/* img */}
        <Marquee pauseOnHover> 
        <div className="flex gap-4">
            {/* card1 */}
          <div className="card card-compact ml-4  max-w-72 max-h-[400px] shadow-xl">
            <figure>
              <img
                src="https://i.pinimg.com/564x/8c/d3/3e/8cd33eac480cd852501de4ffe2567ddc.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">ACTION</h2>
             <p> Drama , Action</p>
              
            </div>
          </div>
             {/* card2 */}
             <div className="card card-compact  max-w-72 max-h-[400px] shadow-xl">
            <figure>
              <img
                src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/07/26/project-power-movie-HD-Posters-.jpg?fit=1500%2C2222&quality=80&zoom=1&ssl=1"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">POWER </h2>
             <p> Drama , Action</p>
              
            </div>
          </div>   {/* card3 */}
          <div className="card card-compact  max-w-72 max-h-[400px] shadow-xl">
            <figure>
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/kv5kfww0/wall-decoration/s/e/t/inception-leonardo-dicaprio-movie-posters-entertainment-movies-original-imag846zrgj6zmbu.jpeg?q=90&crop=false"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">THE DREAM IS REAL</h2>
             <p> Drama , Action</p>
              
            </div>
          </div>   {/* card4 */}
          <div className="card card-compact  max-w-72 max-h-[400px] shadow-xl">
            <figure>
              <img
                src="https://i.pinimg.com/736x/11/d7/fe/11d7feb4cd2a4a374c62e118f2536efa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">DISHOOM</h2>
             <p> Drama , Action</p>
              
            </div>
          </div>     {/* card7 */}
          <div className="card card-compact  max-w-72 max-h-[400px] shadow-xl">
            <figure>
              <img
                src="https://c8.alamy.com/comp/R2FPMM/x-men-days-of-future-past-year-2014-usa-director-bryan-singer-movie-poster-fr-R2FPMM.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">X-MAN</h2>
             <p> Drama , Action</p>
              
            </div>
          </div>    {/* card9 */}
          <div className="card card-compact  max-w-72 max-h-[400px] shadow-xl">
            <figure>
              <img
                src="https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">MORBIUS</h2>
             <p> Drama , Action</p>
              
            </div>
          </div>   {/* card10 */}
          <div className="card card-compact  max-w-72 max-h-[400px] shadow-xl">
            <figure>
              <img
                src="https://i0.wp.com/sreditingzone.com/wp-content/uploads/2018/03/movie-poster.jpg?resize=640%2C923&ssl=1"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">BAAGHI 2</h2>
             <p> Drama , Action</p>
              
            </div>
          </div>  
          

        </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ActionMovie;
