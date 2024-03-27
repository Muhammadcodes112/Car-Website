import React from "react";
import image from "./car.png";
import image2 from "./benz.png";
import image3 from "./image1.png";
import image4 from "./image2.png";
import image5 from "./image4.png";
import image6 from "./playstore.png";
import image7 from "./applestore.png";

import { FaLongArrowAltRight } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { RiPriceTag3Fill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
function Home() {
  return (
    <>
      <section className=" home flex justify-center items-center bg-black px-20">
        <div className="left grid gap-4">
          <h3 className="text-4xl">Rent Cars</h3>
          <h1 className="text-4xl">Easily</h1>
          <h5> Get access to rent early luxury cars for your premium <br />events at affordable prices.</h5>

          <div class="button-effect ">
            <a class="effect effect-1 bg-yellow-400 font-bold" href="#" title="Learn More">Get Started</a>
          </div>
        </div>

        <div className="right flex justify-center items-center">
          <img className="carImage" src={image} alt="" />
        </div>
      </section>




      <section className="h-screen about flex justify-evenly items-center ">
       <div className="content">
        <div className="left">
            <img src={image2} alt="mercedes benz" />
          </div>
          <div className="right w-80 grid gap-8">
            <h1 className="text-2xl font-bold">About us</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae
              dolores, reprehenderit animi ab dolor ipsam officia a perferendis
              unde cupiditate, ea iure corrupti ullam incidunt nulla sequi quod
              quaerat.
            </h1>
            <a href="#" className="text-yellow-400 font-bold rounded border border-yellow-500 px-8 py-3 max-w-fit hover:bg-yellow-300 hover:text-black duration-500 hover:-translate-y-2 hover:scale-100 transition ease-in-out delay-150 btn"> See More </a>
          </div>
       </div>
      </section>



      <section className="h-screen grid gap-10 justify-center items-center text-center why">
        <h1 className="font-bold text-3xl">Why Choose Lurex</h1>

        <div className="down flex gap-5 flex-wrap">
          <div className="box rounded-xl border border-gray-500 flex flex-col gap-10 justify-center items-center px-10  text-center h-96  w-80 duration-500 hover:-translate-y-2 hover:scale-100 transition ease-in-out delay-150">
            <div className="bg-yellow-500 rounded-full flex justify-center items-center p-8 text-2xl"><RiPriceTag3Fill /></div>
            <h1 className="font-bold text-2xl">Best Price</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit incidunt vel adipisci hic explicabo non deserunt quis, tenetur, a ex </h1>
          </div>
         
          <div className="box rounded-xl  border border-gray-500 flex flex-col gap-10 justify-center items-center px-10  text-center h-96  w-80  duration-500 hover:-translate-y-2 hover:scale-100 transition ease-in-out delay-150">
            <div className="bg-yellow-500 rounded-full flex justify-center items-center p-8 text-2xl"><VscWorkspaceTrusted /></div>
            <h1 className="font-bold text-2xl">Fast and Safe</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit incidunt vel adipisci hic explicabo non deserunt quis, tenetur, a ex </h1>
          </div>

          <div className="box rounded-xl border border-gray-500 flex flex-col gap-10 justify-center items-center px-10  text-center h-96  w-80 duration-500 hover:-translate-y-2 hover:scale-100 transition ease-in-out delay-150">
            <div className="bg-yellow-500 rounded-full flex justify-center items-center p-8 text-2xl"><FaScrewdriverWrench /></div>
            <h1 className="font-bold text-2xl">Experienced Drivers</h1>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit incidunt vel adipisci hic explicabo non deserunt quis, tenetur, a ex </h1>
          </div>
        </div>
      </section>




      <section className="text-left m-40 grid gap-8">
        <h1 className="font-bold text-3xl">Book from our collection</h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ab dignissimos</h1>

        <div className="flex justify-evenly text-left flex-wrap gap-4">
          <div className="rounded-xl border border-gray-500 flex flex-col  justify-center items-center text-end h-60  w-60 duration-500 hover:-translate-y-2 hover:scale-100 transition ease-in-out delay-150">
            <h1 className="font-bold">12km</h1>
            <img src={image4} alt="" />
            <h1 className="font-bold text-yellow-400">2015 Hyundai Sonata</h1>
            <div className="flex  justify-between gap-24 font-bold">
              <h1>$70/day</h1>
              <h1>Details</h1>
            </div>
          </div>

          <div className="rounded-xl border border-gray-500 flex flex-col justify-center items-center text-center h-60  w-60 duration-500 hover:-translate-y-2 hover:scale-100 transition ease-in-out delay-150">
            <h1 className="font-bold text-left">12km</h1>
            <img src={image3} alt="" />
            <h1 className="font-bold text-yellow-400">2015 Hyundai Sonata</h1>
            <div className="flex  justify-between gap-24 font-bold">
              <h1>$70/day</h1>
              <h1>Details</h1>
            </div>
          </div>

          <div className="rounded-xl border border-gray-500 flex flex-col justify-center items-center text-center h-60  w-60 duration-500 hover:-translate-y-2 hover:scale-100 transition ease-in-out delay-150">
            <h1 className="font-bold text-left">12km</h1>
            <img src={image5} alt="" />
            <h1 className="font-bold text-yellow-400">2015 Hyundai Sonata</h1>
            <div className="flex  justify-between gap-24 font-bold">
              <h1>$70/day</h1>
              <h1>Details</h1>
            </div>
          </div> 
        </div>
        <a href="#" className="m-auto px-10 p-2 rounded-full text-yellow-400 text-center border h-fit w-fit border-yellow-400 hover:text-black hover:bg-yellow-300 delay-100 transition ease-in-out">See All Cars</a>
      </section>



      <section className="m-40 grid gap-8 text-center">
        <h1 className="font-bold text-3xl">What Our Clients Are Saying</h1>
        <h1 className="w-1/2 m-auto">Lorem ipsum dolor sit amet consectetur, sunt error sint excepturi animi Beatae eum labore, aut.</h1>

        <div className="flex flex-wrap justify-evenly gap-4">

          <div className="box bg-gray-800 rounded-xl flex flex-col w-60 h-60 justify-center items-center gap-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="rounded-full w-20 h-20" />
            <div className="rating flex text-yellow-400">
             <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <h1 className="font-bold">Felix Brandon</h1>
          </div>

          <div className="box bg-gray-800 rounded-xl flex flex-col w-60 h-60 justify-center items-center gap-4">
            <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="rounded-full w-20 h-20" />
            <div className="rating flex text-yellow-400">
             <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <h1 className="font-bold">Felix Brandon</h1>
          </div>

          <div className="box bg-gray-800  rounded-xl flex flex-col w-60 h-60 justify-center items-center gap-4">
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="rounded-full w-20 h-20 object-fill" />
            <div className="rating flex text-yellow-400">
             <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <h1 className="font-bold">Felix Brandon</h1>
          </div>
        
        </div>

      </section>


     <section className="h-140 grid gap-8 text-center bg-black">
      <div className="m-40 grid gap-8 text-center rounded-xl w-fit h-fit px-16 py-8 text-black    bg-gradient-to-r from-yellow-500 to-yellow-300 ">
          <h1 className="font-bold text-3xl">Get Started with Lurex Today!</h1>
          <h1 className="w-3/4 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis error velit commodi sint et ea est ad quaerat Numquam.</h1>
          <div className="flex gap-10 justify-center">
            <a href="#" className="w-40"><img src={image6} alt="playstore" /></a> <a href="#" className="w-40"><img src={image7} alt="" /></a>
          </div>
        </div>

        <div className="flex justify-between px-40 font-bold text-2xl">
          <div>Lurex</div>
          <div className="flex gap-4">
            <a href="#">About</a><a href="#">Services</a><a href="#">Cars</a><a href="#">FAQ</a>
          </div>
          <div className="flex gap-4 items-center">
            <div className="rounded-full border-yellow-600 border p-2 border-x-2"><FaLinkedinIn /></div>
            <div className="rounded-full border-yellow-600 border p-2 border-x-2"><FaFacebookF /></div>
            <div className="rounded-full border-yellow-600 border p-2 border-x-2"><FaTwitter /></div>
          </div>
        </div>
     </section>
    </>
  );
}
export default Home;

