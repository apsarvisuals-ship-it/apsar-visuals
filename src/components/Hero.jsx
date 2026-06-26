import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#08111F]"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute w-[700px] h-[700px] bg-yellow-400/10 rounded-full blur-[180px] top-0 -left-40"></div>

        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] bottom-0 right-0"></div>

      </div>

      {/* Content */}

      <div className="relative z-10 max-w-6xl text-center px-8">

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="text-yellow-400 tracking-[10px] uppercase"
        >
          Digital Marketing Agency
        </motion.h3>

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl lg:text-8xl font-black mt-8 leading-tight"
        >
          Crafting
          <span className="text-yellow-400">
            {" "}Visuals{" "}
          </span>
          That Speak
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="max-w-3xl mx-auto mt-8 text-gray-300 text-xl leading-9"
        >
          We help businesses grow through premium content creation,
          Instagram management, Facebook marketing,
          Meta advertising and creative branding solutions.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-full font-bold flex items-center gap-3 transition">

            Get Free Consultation

            <FaArrowRight />

          </button>

          <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-black px-10 py-5 rounded-full transition">

            View Packages

          </button>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 animate-bounce">

        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">

          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>

        </div>

      </div>
    </section>
  );
}