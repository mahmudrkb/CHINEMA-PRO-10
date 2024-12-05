import React from "react";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container mx-auto  mt-5">
      <div className=" flex justify-center items-center  h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co.com/Vwxtmz6/wave3.jpg')]">
        <h1 class="text-white text-4xl md:text-6xl font-bold p-4 ">
          Let's Talk With Us
        </h1>
      </div>
      {/* part-2 */}
      <div className="grid grid-cols-3 bg-indigo-100 justify-center items-center">
        {/* card-1 */}
        <div className="space-y-3  flex-row items-center p-10">
          <h3 className="text-xl md:text-2xl">Meet Us</h3>
          <div className="flex  gap-2 items-center">
            <IoPhonePortraitOutline />
            <p>+56790393334</p>
          </div>
          <div className="flex  gap-2 items-center">
            <MdOutlineAlternateEmail />
            <p>chinema@pro.com</p>
          </div>

          <div className="flex  gap-2 items-center">
            <IoLocationOutline />
            <p>Mirpur-2, Dhaka, Bangladesh </p>
          </div>
        </div>
        {/* card-2 */}
        <div className="space-y-3   flex-row items-center  p-10">
          <h3 className="text-xl md:text-2xl">Pitch Us</h3>
         <div> <textarea className="textarea" placeholder="Text here"></textarea></div>
         <button className="hover:text-slate-400 ">Submit</button>

        </div>

        {/* card-3 */}
        <div><img className="max-w-sm" src="https://cdn.prod.website-files.com/609ed46055e27a02ffc0749b/661948ebc3050124741263be_6377865c25cdcb31e14aa7e9_hero%2520image%2520-%2520dark.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Contact;
