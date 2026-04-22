const About = () => {
  return (
    <div className="py-8 px-4 bg-[#1c1c1c]">

      {/* About Me */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">About Me</h1>

        <p className="max-w-3xl text-gray-400 mt-4">
          I’m Parvez, a MERN stack developer passionate about building modern,
          responsive, and user-friendly web applications. I enjoy turning ideas
          into real-world products using clean code and efficient design. With a
          strong focus on performance and usability, I aim to create solutions
          that not only work well but also provide a great user experience.
        </p>
      </div>

      {/* My Approach */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-medium">My Approach</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {/* Card 1 */}
          <div className="p-5 border border-zinc-700 rounded-xl text-left 
                          hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition">
            <span className="inline-block border bg-gray-200 px-3 py-1 rounded-md 
                             text-gray-800 font-bold mb-3">
              01
            </span>
            <h3 className="text-lg font-semibold">Clean & Scalable Code</h3>
            <p className="text-gray-400 text-sm mt-2">
              Writing maintainable and structured code that scales with growth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 border border-zinc-700 rounded-xl text-left 
                          hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition">
            <span className="inline-block border bg-gray-200 px-3 py-1 rounded-md 
                             text-gray-800 font-bold mb-3">
              02
            </span>
            <h3 className="text-lg font-semibold">User-Centered Design</h3>
            <p className="text-gray-400 text-sm mt-2">
              Designing intuitive and responsive interfaces for better UX.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 border border-zinc-700 rounded-xl text-left 
                          hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition">
            <span className="inline-block border bg-gray-200 px-3 py-1 rounded-md 
                             text-gray-800 font-bold mb-3">
              03
            </span>
            <h3 className="text-lg font-semibold">Performance Focused</h3>
            <p className="text-gray-400 text-sm mt-2">
              Optimizing applications for speed and smooth performance.
            </p>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">

  <div className="px-6 py-4 border border-zinc-700 rounded-xl text-center">
    <h2 className="text-2xl font-bold">4+</h2>
    <p className="text-gray-400 text-sm">Months Experience</p>
  </div>

  <div className="px-6 py-4 border border-zinc-700 rounded-xl text-center">
    <h2 className="text-2xl font-bold">5+</h2>
    <p className="text-gray-400 text-sm">Projects Completed</p>
  </div>

</div>
    </div>
  );
};

export default About;