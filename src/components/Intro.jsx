import { FaGithub, FaLinkedin } from "react-icons/fa";


const Intro = () => {
    return (
        <div className="h-full pt-16 pb-8 flex items-center bg-[#1c1c1c] text-white">

            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6">

                {/* LEFT SIDE */}
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-2xl text-gray-400">
                        Hi, I’m <span className="text-white font-semibold">Parvez</span> 👋
                    </h1>

                    <h1 className="text-5xl font-bold leading-tight">
                        MERN Stack Developer
                    </h1>

                    <p className="text-lg text-gray-400 max-w-md">
                        Focused on building fast, responsive, and user-friendly web applications.
                    </p>

                    {/* BUTTON */}
                    <a href="public/Mohd parvez cv.pdf" download>
                        <button className="px-5 py-2 bg-gray-300 text-zinc-800 rounded-lg font-medium
                             hover:bg-white 
                             hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
                             transition">
                        Download CV
                    </button>
                    </a>

                    {/* ICONS */}
                    <div className="flex gap-6 pt-4">
                        <a href="https://github.com/Mohdparvez0923"
                        target="blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 text-3xl transition">
                        <FaGithub />
                    </a>
                        <a href="https://linkedin.com/in/mohdparvez0923"
                        target="blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 text-3xl transition">
                        <FaLinkedin />
                    </a>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <div className="h-100 bg-[#1c1c1c] border border-zinc-600 rounded-xl 
                  flex items-center justify-center overflow-hidden">

                        <img
                            src="https://i.pinimg.com/1200x/29/dd/db/29dddbb74db0c68adc5358271281e03a.jpg"
                            className="w-full h-full object-contain"
                        />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Intro;