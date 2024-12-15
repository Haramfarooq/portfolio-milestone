import React from "react"

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
export default function Skill(){
    return(
                <div className=" bg-gray-600 min-h-screen flex flex-col items-center justify-center">
                  <div id="skill">
                    <section className="text-slate-500 body-font">
                    <div className="container mx-auto px-5 py-24">
                        <div className="flex flex-col text-center w-full mb-20 justify-center items-center">
                            <h1 className="sm:text-4xl text-5xl font-bold title-font lg:w-1/3 mb-4 
                            animate-bounce text-black">My Skills</h1>
                        </div>
<div className="flex flex-wrap -m-4">
    <div className="p-4 md:w-1/3">
        <div className="flexs rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
                <div className="w-8 h-8 inline-flex items-center justify-center rounded-full
                 bg-cyan-500 text-black flex-shrink-0">
                    {<FaHtml5 className='font-bold text-2xl'/>}
                <circle cx={12} cy={7} r={4} />
                 </div>
                 <h2 className="text-black text-lg title-font font-medium">HTML</h2>
            </div>
            <p className="font-medium text-right">75%</p>
            <div className="flex-grow">
                <div className="h-1 w-full bg-cyan-400 rounded-xl"></div>
        </div>
        </div>
        </div>

        <div className="p-4 md:w-1/3">
        <div className="flexs rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
                <div className="w-8 h-8 inline-flex items-center justify-center rounded-full
                 bg-cyan-500 text-black flex-shrink-0">
                    {<FaCss3Alt className='font-bold text-2xl'/>}
                <circle cx={12} cy={7} r={4} />
                 </div>
                 <h2 className="text-black text-lg title-font font-medium">CSS</h2>
            </div>
            <p className="font-medium text-right">70%</p>
            <div className="flex-grow">
                <div className="h-1 w-full bg-cyan-400 rounded-xl"></div>
        </div>
        </div>
        </div>
        

        <div className="p-4 md:w-1/3">
        <div className="flexs rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
                <div className="w-8 h-8 inline-flex items-center justify-center rounded-full
                 bg-cyan-500 text-black flex-shrink-0">
                    {<SiTypescript className='font-bold text-2xl'/>}
                <circle cx={12} cy={7} r={4} />
                 </div>
                 <h2 className="text-black text-lg title-font font-medium">Typescript</h2>
            </div>
            <p className="font-medium text-right">60%</p>
            <div className="flex-grow">
                <div className="h-1 w-full bg-cyan-400 rounded-xl"></div>
                </div>
                </div>
                </div>
                

                <div className="p-4 md:w-1/3">
        <div className="flexs rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
                <div className="w-8 h-8 inline-flex items-center justify-center rounded-full
                 bg-cyan-500 text-black flex-shrink-0">
                    {<SiNextdotjs className='font-bold text-2xl'/>}
                <circle cx={12} cy={7} r={4} />
                 </div>
                 <h2 className="text-black text-lg title-font font-medium">Next JS</h2>
            </div>
            <p className="font-medium text-right">80%</p>
            <div className="flex-grow">
                <div className="h-1 w-full bg-cyan-400 rounded-xl"></div>
                </div>
                </div>
                </div>
                </div>
                </div>

        </section>
    </div>
        </div>
    )
}