import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
//   console.log(review)
  return (
    <div className="bg-slate-100">
        <div className="my-5 container mx-auto p-5 ">
      <div className="text-center mt-5">
        <h2 className="text-3xl md:text-4xl"> Review</h2>
        <h4 >what our client say</h4>
      </div>

      <div className="my-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((reviewer) => (
            <SwiperSlide key={reviewer._id}>
              <div className="text-center  w-3/5 mx-auto">
                <Rating
                  className="mx-auto my-4"
                  style={{ maxWidth: 180 }}
                  value={reviewer.rating}
                  readOnly
                />

                <p>Details{reviewer.details}</p>
                <h3 className="text-2xl font-bold mt-3 text-orange-400">
                  {reviewer.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Review;
