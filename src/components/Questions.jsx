import React from "react";

import Lottie from "lottie-react";
import animationData from "../assets/json/fcq.json";

const Questions = () => {
  return (
    <div className="container mx-auto p-3 my-10">
      <div className="my-10">
        <h1 className="text-3xl md:text-4xl mb-3 font-bold">
          Frequently asked questions !!!
        </h1>
        <p>
          Can’t find the answer you’re looking for? Reach out to our customer
          support team.
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        <div>
          <Lottie
            className="max-w-sm  mx-auto"
            animationData={animationData}
            loop={true}
          />
        </div>

        <div className="">
          <div className="collapse mb-5  dark:text-indigo-950 collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Q: What types of services do you offer?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                we provide a complete range of services to ensure an exceptional movie-going experience. Our platform offers detailed movie listings, showcasing the latest releases, upcoming films, and timeless classics.
              </p>
            </div>
          </div>
          <div className="collapse mb-5  dark:text-indigo-950 collapse-arrow bg-base-200 ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Q: Do you offer discounts or packages?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer seasonal discounts and service bundles for
                customers who book multiple services at once. Check out our
                Promotions page for the latest deals.
              </p>
            </div>
          </div>

          <div className="collapse mb-5  dark:text-indigo-950 collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Q: How can I book a service?
            </div>
            <div className="collapse-content">
              <p>
                You can book a service through our website by filling out the
                booking form, or you can call us directly at +62362378327{" "}
              </p>
            </div>
          </div>
          <div className="collapse  dark:text-indigo-950 collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Q: What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p>
                We accept cash, credit cards, and online payments through Bkash
                , Nagad , Rocket . Payment is collected upon completion of the
                service.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
