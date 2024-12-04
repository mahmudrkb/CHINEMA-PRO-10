import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" mb-5 mx-auto   pb-5">
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item relative w-full">
          <img
            src="https://i.ytimg.com/vi/wSUKK3D3M1k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBK6knZNao-we1MnIXhOZ-MuF5qKw"
            className="w-full max-h-96 object-cover 
            mix-blend-luminosity "
          />

          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between "> 
           
          
          <div >
                <h2 className="text-5xl  md:text-6xl font-extrabold text-white">P U S H P A</h2>
                <p>This is a Action Movie </p>
                <Link className=" btn bg-transparent text-white bg-slate-400 border-none ">See More</Link>
            </div>
        
             
           
              
         
          </div>
        </div>
        <div id="item2" className="carousel-item relative w-full">
          <img
            src="https://i.ebayimg.com/images/g/B2sAAOSwdKRjG-YJ/s-l1200.jpg"
            className="w-full max-h-96 object-cover  mix-blend-luminosity " 
          />
           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
           <div >
                <h2 className="text-5xl  md:text-6xl font-extrabold text-white">A V A T A R</h2>
                <p>This is a science fiction Movie </p>
                <Link className=" btn bg-transparent text-white bg-slate-400 border-none ">See More</Link>
            </div>
        
    </div>
        </div>
        <div id="item3" className="carousel-item relative w-full">
          <img
            src="https://www.tallengestore.com/cdn/shop/products/7381746090164A_f6da6fe6-9965-4140-a110-44c068508a8c.jpg?v=1683929486"
            className="w-full max-h-96 object-cover  mix-blend-luminosity "
          />
           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
           <div >
                <h2 className="text-5xl  md:text-6xl font-extrabold text-white">3 I D I O T S</h2>
                <p>This is a comedy Movie </p>
                <Link className=" btn bg-transparent text-white bg-slate-400 border-none ">See More</Link>
            </div>
        
    </div>
        </div>
        <div id="item4" className="carousel-item relative w-full">
          <img
            src="https://i0.wp.com/www.shikipedia.com/wp-content/uploads/2023/09/jawan-movie.jpg?fit=1280%2C720&ssl=1"
            className="w-full object-cover  max-h-96  mix-blend-luminosity"
          />
           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
           <div >
                <h2 className="text-5xl  md:text-6xl font-extrabold text-white">J A W A N</h2>
                <p>This is a Action Movie </p>
                <Link className=" btn bg-transparent text-white bg-slate-400 border-none ">See More</Link>
            </div>
        
    </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
