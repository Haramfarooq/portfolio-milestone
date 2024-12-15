"use client"
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import Image from "next/image";

const Hero = () =>{
    return(
        <div className="bg-gray-600 min-h-screen flex flex-col items-center justify-center">
            <section className="text-slate-500 text-center">
                <div className="container mx-auto px-5 py-24 flex flex-col items-center ">
                    <Image
                    className="w-48 h-48 mb-8 rounded-full border-4 border-cyan-800 shadow-lg"
                    src="/Images/girly.webp"
                    alt="hero"
                    width={200}
                    height={200}
                    />
                    <h1  className="text-5xl font-bold text-black mb-4"> Hey!
                    <br/>
                    <br/>
                    I am Haram
                    </h1>
                     <br/>
                     <br/>
                    {/* <h1  className="text-5xl font-bold text-gray-300 mb-4"> I Am </h1> */}
                    <div className="text-3xl font-semibold text-black">
                    <Typewriter
              words={["Web Developer and Programmar"]}
              loop={true}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            </div>
            <div className="w-16 h-1 bg-cyan-950 mt-4 mb-6 "> </div>
                <p className="leading-relaxed text-lg max-w-mds text-black">
                    I am learning  HTML , CSS , Typescript and Next JS websites with responsiveness
                    <br/>
                    and build modern optimized web experiences!
                </p>
                <br/>
                <br/>
           <Link href="#Contact">
            <button className="bg-cyan-900 hover:bg-cyan-500 text-white py-3 px-6
            rounded-full transition duration-500">
                Contact me for further details!
            </button>
           </Link>
            </div>
            </section>
            </div>
                    
                    
                       
    )

}
export default Hero;
