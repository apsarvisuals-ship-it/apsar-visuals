import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaProjectDiagram,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: 150,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      icon: <FaUsers />,
      number: 50,
      suffix: "+",
      title: "Happy Clients",
    },
    {
      icon: <FaChartLine />,
      number: 2,
      suffix: "M+",
      title: "People Reached",
    },
    {
      icon: <FaStar />,
      number: 98,
      suffix: "%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-[#091321] py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-[#101b2c] rounded-3xl p-10 border border-white/10
              hover:border-yellow-400 hover:-translate-y-3
              duration-300 text-center"
            >

              <div className="text-5xl text-yellow-400 mb-6 flex justify-center">

                {item.icon}

              </div>

              <h2 className="text-5xl font-black">

{item.number}
                {item.suffix}

              </h2>

              <p className="mt-4 text-gray-400">

                {item.title}

              </p>

            </div>

          ))}

        </motion.div>
      </div>
    </section>
  );
}