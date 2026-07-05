import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaUsers,
  FaInstagram,
  FaPenNib,
  FaVideo,
  FaFilm,
  FaFacebook,
  FaBullseye,
  FaChessKnight,
  FaHandshake,
  FaPalette,
  FaMicrophone,
  FaLaptopCode,
} from "react-icons/fa";

export default function ServicesWeOffer() {
  const services = [
    {
      title: "Social Media Management",
      desc: "End-to-end handling of your profiles — planning, posting, and engagement that keeps your brand consistently active.",
      icon: <FaUsers />,
    },
    {
      title: "Instagram Growth",
      desc: "Organic strategies to grow real, engaged followers and turn your profile into a lead-generating asset.",
      icon: <FaInstagram />,
    },
    {
      title: "Content Creation",
      desc: "Scroll-stopping photo and video content crafted to match your brand voice and audience.",
      icon: <FaPenNib />,
    },
    {
      title: "Video Production",
      desc: "Full-scale shoots and post-production — from concept to final cut — for ads, brand films, and social content.",
      icon: <FaVideo />,
    },
    {
      title: "Reels Editing",
      desc: "Fast-paced, trend-aware edits designed to maximize watch time, shares, and reach on Instagram & Reels.",
      icon: <FaFilm />,
    },
    {
      title: "Meta Ads",
      desc: "Data-driven Facebook & Instagram ad campaigns built to convert — targeted, tested, and optimized.",
      icon: <FaFacebook />,
    },
    {
      title: "Lead Generation",
      desc: "Funnels and campaigns engineered to bring qualified leads straight into your pipeline.",
      icon: <FaBullseye />,
    },
    {
      title: "Brand Strategy",
      desc: "Positioning, messaging, and visual identity that make your brand unmistakable in a crowded market.",
      icon: <FaChessKnight />,
    },
    {
      title: "Influencer Marketing",
      desc: "Curated creator partnerships that put your brand in front of the right audience, authentically.",
      icon: <FaHandshake />,
    },
    {
      title: "Graphic Design",
      desc: "Clean, on-brand visuals — from social creatives to complete brand collateral.",
      icon: <FaPalette />,
    },
    {
      title: "Podcast Production",
      desc: "Recording, editing, and distribution support to launch and grow a podcast that sounds professional.",
      icon: <FaMicrophone />,
    },
    {
      title: "Website Development",
      desc: "Fast, modern, conversion-focused websites built to represent your brand online.",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#07101d] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-0 w-[450px] h-[450px] bg-yellow-400/10 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px]"
        />
        <div
          className="
            absolute inset-0
            opacity-[0.03]
            bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="
              inline-flex items-center gap-3
              text-yellow-400
              px-5 py-2.5
              rounded-full
              border border-yellow-400/20
              bg-yellow-400/5
              hover:bg-yellow-400 hover:text-black
              transition-all duration-300
            "
          >
            <FaArrowLeft />
            Back Home
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-medium">
            What We Do
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mt-6 leading-tight">
            Services
            <span className="text-yellow-400"> We Offer</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-8">
            A full-stack creative and growth partner — everything your brand
            needs to look sharp, get seen, and convert.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="
                group relative
                bg-[#101b2c] p-8 rounded-3xl
                border border-white/10
                hover:border-yellow-400/60
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* glow on hover */}
              <div
                className="
                  pointer-events-none absolute -top-16 -right-16
                  w-40 h-40 rounded-full
                  bg-yellow-400/0 group-hover:bg-yellow-400/10
                  blur-3xl transition-all duration-500
                "
              />

              {/* index number */}
              <span className="absolute top-6 right-8 text-4xl font-black text-white/5 group-hover:text-yellow-400/10 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className="
                  relative z-10
                  w-14 h-14
                  flex items-center justify-center
                  rounded-2xl
                  bg-yellow-400/10
                  text-yellow-400 text-2xl
                  border border-yellow-400/20
                  group-hover:bg-yellow-400 group-hover:text-black
                  transition-all duration-300
                "
              >
                {service.icon}
              </div>

              <h3 className="relative z-10 text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="relative z-10 text-gray-400 mt-3 leading-7">
                {service.desc}
              </p>

              <div className="relative z-10 flex items-center gap-2 mt-6 text-sm font-semibold text-yellow-400 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                Learn more
                <FaArrowRight className="text-xs" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="
            mt-20 p-10 md:p-14
            rounded-[40px]
            bg-gradient-to-r from-yellow-400/10 via-white/5 to-blue-500/10
            border border-white/10
            flex flex-col md:flex-row items-center justify-between gap-8
          "
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black">
              Not sure where to start?
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Tell us about your brand and we'll put together a plan tailored
              to your goals.
            </p>
          </div>

          <Link
            to="/#contact"
            className="
              whitespace-nowrap
              bg-yellow-400 hover:bg-yellow-300
              text-black px-8 py-4
              rounded-full font-bold
              flex items-center gap-3
              transition
            "
          >
            Get in Touch
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
