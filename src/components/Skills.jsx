


const Skills = () => {
    return (
        <div className=" text-white py-8">

            {/* Heading */}
            <div className="w-full text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-semibold">Skills</h1>
                <p className="text-gray-400 mt-3">
                    Technologies and tools I use to build modern web applications.
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

                {/* Card 1 */}
                <div className="h-80 p-5 border border-zinc-700 rounded-2xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition duration-300">

                    <div className="h-30 space-y-2">
                        <h1 className="text-4xl font-semibold">Frontend Development</h1>
                        <p className="text-gray-400 text-sm">
                            Building responsive and interactive user interfaces.
                        </p>
                    </div>

                    <div className="h-px bg-zinc-700 my-4"></div>

                    <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            HTML
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            CSS
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            JavaScript
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            React
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Tailwind CSS
                        </span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="h-80 p-5 border border-zinc-700 rounded-2xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition duration-300">

                    <div className="h-30 space-y-2">
                        <h1 className="text-4xl font-semibold">Backend Development</h1>
                        <p className="text-gray-400 text-sm">
                            Handling server-side logic and API development.
                        </p>
                    </div>

                    <div className="h-px bg-zinc-700 my-4"></div>

                    <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Node.js
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Express.js
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Rest APIs
                        </span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="h-80 p-5 border border-zinc-700 rounded-2xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition duration-300">

                    <div className="h-30 space-y-2">
                        <h1 className="text-4xl font-semibold">Database Management</h1>
                        <p className="text-gray-400 text-sm">
                            Designing and managing efficient databases.
                        </p>
                    </div>

                    <div className="h-px bg-zinc-700 my-4"></div>

                    <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            MongoDB Atlas
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Mongoose
                        </span>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="h-80 p-5 border border-zinc-700 rounded-2xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition duration-300">

                    <div className="h-30 space-y-2">
                        <h1 className="text-4xl font-semibold">Tools & Technologies</h1>
                        <p className="text-gray-400 text-sm">
                            Using modern tools for development and deployment.
                        </p>
                    </div>

                    <div className="h-px bg-zinc-700 my-4"></div>

                    <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Git
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            GitHub
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Postman
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Vercel
                        </span>
                        <span className="px-3 py-1 text-md border border-zinc-600 rounded-full 
                             hover:border-blue-400 
                             hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                             transition">
                            Render
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;