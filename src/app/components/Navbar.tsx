import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar (){
    return(
        <div className="bg-gray-400 z-50 top-0">
            <header  className="text-gray-800 body-font">
            <div className="container mx-auto p-5 md:flex-row flex-col flex flex-wrap items-center ">
            <a className="text-black text-xl font-medium flex title-font items-center mb-4 md:mb-0">
            <Image
                    
                    src="/Images/girly.webp"
                    alt="hero"
                    width={50}
                    height={50} className="rounded-full"
                    />
                     <span className="ml-4 font-bold text-3xl">Haram</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base gap-6 justify-center">
                <Link href={'/'} className="hover:text-black">Home</Link>
                <Link href={'#About'} className=" hover:text-black">About</Link>
                <Link href={'#Skill'} className="hover:text-black">Skill</Link>
                <Link href={'#Contact'} className="hover:text-black">Contact</Link>
                </nav>
                </div>
                </header>
                </div>
    )
}
    