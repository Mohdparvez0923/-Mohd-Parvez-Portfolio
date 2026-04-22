

const Projects = () => {
  return (
    <div className="bg-[#1c1c1c] text-white py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold">Projects</h1>
        <p className="text-gray-400 mt-3">
          A selection of projects showcasing my skills in full-stack web development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card */}
        <div className="p-5 border border-zinc-700 rounded-xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition">

          <h2 className="text-xl font-semibold">Community App</h2>
          <p className="text-gray-400 text-sm mt-2">
            A MERN-based community app with user authentication, posts, comments, and a modern UI.
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">React</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">MongoDB</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">Express.js</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">Authentication</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">API Integration</span>


          </div>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            <a href=" https://community-frontend-eight-murex.vercel.app/" 
            target="blank"
            rel="noopener npreferrer"
            className="text-blue-400 text-sm">Live</a>
            <a href="https://github.com/Mohdparvez0923/Community"
            target="blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-sm">GitHub</a>
          </div>
        </div>

{/* ================================================card 2========================================= */}

        <div className="p-5 border border-zinc-700 rounded-xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition">

          <h2 className="text-xl font-semibold">CoinPulse - CryptoWebApp</h2>
          <p className="text-gray-400 text-sm mt-2">
            CoinPulse is a sleek and responsive crypto web application designed to help users monitor cryptocurrency prices, analyze trends, and stay updated with the market in real time.
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">React</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">Tailwind CSS</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">Third-party APIs</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">Authentication</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">API Integration</span>


          </div>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            <a href=" https://community-frontend-eight-murex.vercel.app/" 
            target="blank"
            rel="noopener npreferrer"
            className="text-blue-400 text-sm">Live</a>
            <a href="https://github.com/Mohdparvez0923/Community"
            target="blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-sm">GitHub</a>
          </div>
        </div>

{/* ================================================card 3========================================= */}

        <div className="p-5 border border-zinc-700 rounded-xl 
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                        transition">

          <h2 className="text-xl font-semibold">EV-Dashboard</h2>
          <p className="text-gray-400 text-sm mt-2">
             Modern EV dashboard built with Reactjs and tailwind CSS, featuring authentication, user data visualization, and a responsive UI.
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">React</span>
            <span className="px-2 py-1 text-xs border border-zinc-600 rounded-full">Tailwind CSS</span>


          </div>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            <a href=" https://community-frontend-eight-murex.vercel.app/" 
            target="blank"
            rel="noopener npreferrer"
            className="text-blue-400 text-sm">Live</a>
            <a href="https://github.com/Mohdparvez0923/Community"
            target="blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-sm">GitHub</a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Projects;