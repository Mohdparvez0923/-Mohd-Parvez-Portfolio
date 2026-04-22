const Services = () => {
  return (
    <div className=" text-white py-8">

      {/* Heading */}
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold">Services</h1>
        <p className="text-gray-400 mt-3">
          I build modern, scalable, and user-friendly web applications.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

        {/* Card 1 */}
        <div className="h-80 p-5 border border-zinc-700 rounded-2xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition duration-300">
          
          <div className="h-40 space-y-2">
            <h1 className="text-4xl font-semibold">Full Stack Development</h1>
            <p className="text-gray-400 text-sm">
              Building complete web applications using MERN stack.
            </p>
          </div>

          <div className="h-px bg-zinc-700 my-4"></div>

          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
              Full Solution
            </span>
            <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
              Seamless Integration
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-80 p-5 border border-zinc-700 rounded-2xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition duration-300">
          
          <div className="h-40 space-y-2">
            <h1 className="text-4xl font-semibold">Frontend Development</h1>
            <p className="text-gray-400 text-sm">
              Creating responsive and modern UI with React & Tailwind.
            </p>
          </div>

          <div className="h-px bg-zinc-700 my-4"></div>

          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
              Clean UI
            </span>
            <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
              Smooth Interaction
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-80 p-5 border border-zinc-700 rounded-2xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition duration-300">
          
          <div className="h-40 space-y-2">
            <h1 className="text-4xl font-semibold">Backend Development</h1>
            <p className="text-gray-400 text-sm">
              Developing APIs and server-side logic with Node.js & Express.
            </p>
          </div>

          <div className="h-px bg-zinc-700 my-4"></div>

          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
              Secure APIs
            </span>
            <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
              Scalable Logic
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="h-80 p-5 border border-zinc-700 rounded-2xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition duration-300">
          
          <div className="h-40 space-y-2">
            <h1 className="text-4xl font-semibold">REST API Development</h1>
            <p className="text-gray-400 text-sm">
              Designing and integrating scalable APIs.
            </p>
          </div>

          <div className="h-px bg-zinc-700 my-4"></div>

          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
              REST APIs
            </span>
            <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
              Secure Endpoints
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;