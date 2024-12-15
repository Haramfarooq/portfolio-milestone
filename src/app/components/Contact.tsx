
export default function Contact (){
    return(
        <div>
            <div className="w-full max-w-8xl p-8 bg-gray-600 items-center justify- center">
            <div className="w-1/2 p-8 ">
            
            <h1 className="text-2xl font-bold text-center text-black mb-4">
            Contact
            </h1>
            <p className="text-center text-black mb-6">
            Feel free to Contact!
            </p>
            <div className="mb-4">
              <label htmlFor="username"
              className="block text-sm font-medium text-black">
               Name
              </label>
              <input
              type="name"
              id="name"
              name="name"
              className="w-full mt-1 px-3 py-2 border-b border-cyan-800 focus:outline-none focus:ring-2"/>
              </div>

             <div className="mb-4">
              <label htmlFor="Email"
              className="block text-sm font-medium text-black">
               Email or Phone Number
              </label>
              <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-2"/>
             </div>
            
             <div className="mb-6">
              <label htmlFor="Password"
              className="block text-sm font-medium text-black">
                 Message
              </label>
              <input
              type="msg"
              id="msg"
              name="msg"
             className="w-full mt-1 px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-2"/>
             </div>
        </div>
        </div>
        </div>
    )
}