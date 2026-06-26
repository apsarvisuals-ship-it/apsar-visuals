import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const portfolio = [
    {
      title: "Influencer Marketing",
      image: "/portfolio/1.jpg",
      category: "Instagram Growth",
      link: "/portfolio/influencer-marketing",
    },

    {
      title: "Fashion Brand",
      image: "/portfolio/2.jpg",
      category: "Branding",
      link: "/portfolio/fashion-brand",
    },

    {
      title: "Event Promotion",
      image: "/portfolio/3.jpg",
      category: "Reels",
      link: "/portfolio/event-promotion",
    },

    {
      title: "Academy Promotion",
      image: "/portfolio/4.jpg",
      category: "Meta Ads",
      link: "/portfolio/academy-promotion",
    },

    {
      title: "Podcasts",
      image: "/portfolio/5.jpg",
      category: "Lead Generation",
      link: "/portfolio/podcasts",
    },

    {
      title: "Story Telling",
      image: "/portfolio/6.jpg",
      category: "Social Media",
      link: "/portfolio/story-telling",
    },
  ];
  return (
    <section id="portfolio" className="py-28 bg-[#08111F]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <p className="uppercase tracking-[8px] text-yellow-400">Portfolio</p>

          <h2 className="text-5xl font-black mt-4">
            Our Recent
            <span className="text-yellow-400"> Projects</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Every brand has a unique story. Here are some creative projects
            crafted by Apsar Visuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group rounded-3xl overflow-hidden bg-[#101b2c]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-8">
                <p className="text-yellow-400">{item.category}</p>

                <h3 className="text-2xl font-bold mt-3">{item.title}</h3>

                <Link
                  to={item.link}
                  className="flex items-center gap-3 mt-6 text-yellow-400 hover:text-white"
                >
                  View Project
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
