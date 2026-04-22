

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" text-white py-10 border-t border-zinc-700">

            <div className="max-w-6xl mx-auto text-center px-4">

                <h1 className="text-2xl font-semibold">Mohd Parvez Ansari</h1>
                <a href="mailto:itsansari0923@gmail.com"
                    className="text-gray-400 hover:text-white transition">
                    itsansari0934@gmail.com
                </a>

                <p className="text-gray-400 mt-2">
                    MERN Stack Developer building modern and scalable web applications.
                </p>

                <div className="flex justify-center gap-6 mt-4 text-2xl">
                    <a
                        href="https://github.com/Mohdparvez0923"
                        target="blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition">
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/mohdparvez0923"
                        target="blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition">
                        <FaLinkedin />
                    </a>
                </div>

                <p className="text-gray-500 text-sm mt-6">
                    © 2026 Parvez. All rights reserved.
                </p>

            </div>
        </div>
    );
};

export default Footer;