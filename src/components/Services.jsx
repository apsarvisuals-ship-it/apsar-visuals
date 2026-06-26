import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaBullhorn,
  FaVideo,
  FaPaintBrush,
  FaChartLine,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaInstagram />,
      title: "Instagram Management",
      desc: "Complete Instagram account handling, content scheduling, engagement and growth."
    },
    {
      icon: <FaFacebook />,
      title: "Facebook Management",
      desc: "Professional Facebook page management with engaging content and community growth."
    },
    {
      icon: <FaVideo />,
      title: "Video Production",
      desc: "Professional reels, promotional videos and brand storytelling content."
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      desc: "Creative social media posts, banners, branding and marketing creatives."
    },
    {
      icon: <FaBullhorn />,
      title: "Meta Ads",
      desc: "High-converting Facebook & Instagram advertising campaigns for lead generation."
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Reporting",
      desc: "Monthly performance reports with actionable insights to grow your business."
    }
  ];

  return (
    <section
      id="services"
      className="py-28 bg-[#08111F]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-yellow-400">
            Services
          </p>

          <h2 className="text-5xl font-black mt-4">
            What We
            <span className="text-yellow-400"> Offer</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We provide end-to-end digital marketing solutions that help businesses
            build their brand, attract customers and increase sales.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-[#101b2c] rounded-3xl p-10 border border-white/10 hover:border-yellow-400 duration-300"
            >

              <div className="text-5xl text-yellow-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                {service.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}