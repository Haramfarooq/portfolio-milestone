
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import React from "react";

export default function Footer (){
    return(
        <div className="bg-gray-400">
            <footer className="text-slate-500 body-font">
                <div className="container mx-auto px-5 py-8 sm:flex-row flex-col flex items-center ">
                    <div className="flex items-center justify-start">
                   
                        <span className="text-black text-xl font-medium">Haram m.Farooq</span>
                        </div>
                     <p className=" text-sm text-black sm:ml-4 sm:pl-4 sm:border-1-2 sm:border-cyan-800 sm:py-2
                     sm:mt-0 mt-4">@ 2024 Haram M.Farooq</p>
                     <div className="flex items-center gap-4 mt-4 sm:mt-0">
          
           <FaInstagram size={20} color="#000000"/>
           <FaFacebookF size={20} color="#000000"/>
            <FaTwitter size={20} color="#000000"/>
            <FaLinkedin size={20} color="#000000"/>
     
            </div>
                </div>
                
            </footer>
             </div>
    )
}