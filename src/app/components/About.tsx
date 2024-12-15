import Image from "next/image";
export default function About(){
    return(
        <div className=" bg-gray-600 min-h-screen flex flex-col items-center justify-center">
          <div id="About">
            <section className="text-slate-500 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center ">
                    <h1  className="text-5xl font-bold text-black mb-4">
                        It's me Haram here!
                    </h1>
                    <p className="leading-relaxed text-lg max-w-md text-black mb-10">
                        "Skilled in Web-Designer by using Html , CSS , Typescript , NextJS and 
                        also creating responsiveness"
                    </p>
                    <div/>
                    <div/>
                    </div>
                    <div className="container mx-auto px-5 py-24 flex flex-col items-center ">
                    <Image
                    className="w-48 h-48 object-cover mb-8 rounded-full border-4 border-cyan-800 shadow-lg"
                    src="/Images/girly.webp"
                    alt="hero"
                    width={200}
                    height={200}
                    />
                    </div>
                    </div>
            </section>
          </div>
        </div>
    )
}