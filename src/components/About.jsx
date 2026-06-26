import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#07101d] py-28 px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
              className="rounded-3xl shadow-2xl"
              alt="Agency"
            />

            <div className="absolute -bottom-8 -right-8 bg-yellow-400 text-black rounded-2xl px-8 py-6 shadow-xl">

              <h2 className="text-4xl font-black">

                5+

              </h2>

              <p className="font-semibold">

                Years Experience

              </p>

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >

          <p className="tracking-[8px] text-yellow-400 uppercase">

            About Us

          </p>

          <h2 className="text-6xl font-black mt-6 leading-tight">

            We Don't Just Create

            <span className="text-yellow-400">

              {" "}Content

            </span>

          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-9">

            At <span className="text-white font-semibold">Apsar Visuals</span>,
            we help brands stand out through creative storytelling,
            premium visuals and performance-driven digital marketing.

            Every reel, post, campaign and advertisement is designed
            to increase visibility, engagement and sales.

          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="flex gap-3 items-center">

              <FaCheckCircle className="text-yellow-400 text-xl" />

              <span>Instagram Growth</span>

            </div>

            <div className="flex gap-3 items-center">

              <FaCheckCircle className="text-yellow-400 text-xl" />

              <span>Meta Ads</span>

            </div>

            <div className="flex gap-3 items-center">

              <FaCheckCircle className="text-yellow-400 text-xl" />

              <span>Video Production</span>

            </div>

            <div className="flex gap-3 items-center">

              <FaCheckCircle className="text-yellow-400 text-xl" />

              <span>Brand Strategy</span>

            </div>

          </div>

          <button
            className="mt-12 bg-yellow-400
            hover:bg-yellow-300
            px-10 py-5
            rounded-full
            text-black
            font-bold
            duration-300"
          >

            Learn More

          </button>

        </motion.div>

      </div>
    </section>
  );
}