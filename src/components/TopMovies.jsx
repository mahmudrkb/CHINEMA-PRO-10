
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopMovies = () => {
   
        AOS.init({ duration: 1500 });

    
  return (
    <div className=" " >
      <div className="container mx-auto px-32 pt-10">
        <h2 className=" text-center text-3xl md:text-4xl my-10">Top 5 Movies</h2>
        <div className="grid grid-cols-3 ">

          <div className="col-span-2 row-span-2"  data-aos="fade-right"> <img className="w-full max-h-full "
         
          
              src="https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg"
              alt=""
            /></div>

          <div  data-aos="fade-down">
            <img className="w-full h-full"
              src="https://i.ebayimg.com/images/g/PZQAAOSw4zdcUNqv/s-l1200.jpg"
              alt=""
            />
          </div>
          <div  data-aos="fade-up">
            <img className="w-full h-full"
              src="https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842753281-3T90U1EY5HUNCG43XERJ/A2_Poster_DC_v80_PAYOFF_221029_12trimHD.jpg"
              alt=""
            />
          </div>

         
         <div data-aos="fade-right" className="col-span-2 ">
            <img className="w-full h-full" src="https://wallpapers.com/images/hd/movie-poster-background-x6fu97aioeo5vidk.jpg" alt="" />
          </div>
         
          <div data-aos="fade-left">
            <img className="w-full h-full"  src="https://w0.peakpx.com/wallpaper/902/32/HD-wallpaper-heimdall-thor-comics-holi-hollywood-idris-elba-marvel-marvel-cinematic-universe-marvel-comics-marvel-movies-movie-movie-poster-orange-poster-thor-ragnarok.jpg" alt="" />
          </div>
         </div>
          
         
        </div>
      </div>
    
  );
};

export default TopMovies;
