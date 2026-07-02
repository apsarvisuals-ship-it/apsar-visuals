import { motion } from "framer-motion";

export default function SoftwareWeUse() {
  const software = [
    {
      name: "Premiere Pro",
      logo: "/software/premierepro.png",
    },
    {
      name: "After Effects",
      logo: "/software/aftereffects.png",
    },
    {
      name: "Photoshop",
      logo: "/software/photoshop.png",
    },
    {
      name: "Illustrator",
      logo: "/software/adobeillustrator.png",
    },
    {
      name: "Canva Pro",
      logo: "/software/canva.png",
    },
    {
      name: "Figma",
      logo: "/software/figma.png",
    },
    {
      name: "Notion",
      logo: "/software/notion.png",
    },
  ];

  return (
    <section
      id="software"
      className="py-28 bg-[#08111F] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-yellow-400">
            CREATIVE STACK
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Software
            <span className="text-yellow-400"> We Use</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            We leverage industry-leading creative, editing and marketing
            software to produce high-quality content and measurable results.
          </p>

        </div>

        {/* Infinite Logo Slider */}

        <div className="mt-20 overflow-hidden">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="flex gap-8 w-max"
          >

            {[...software, ...software].map((item, index) => (

              <div
                key={index}
                className="
                  min-w-[220px]
                  h-[170px]
                  rounded-3xl
                  bg-gradient-to-b
                  from-[#101b2c]
                  to-[#0d1625]
                  border
                  border-white/10
                  hover:border-yellow-400
                  hover:scale-105
                  transition-all
                  duration-300
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-xl
                "
              >

                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-20 h-20 object-contain"
                />

                <h3 className="mt-5 text-lg font-semibold">
                  {item.name}
                </h3>

              </div>

            ))}

          </motion.div>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#101b2c] p-8 rounded-3xl border border-white/10"
          >

            <h3 className="text-2xl font-bold">
              Video Production
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Premiere Pro and After Effects help us create
              cinematic videos, reels and advertisements with
              professional quality.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#101b2c] p-8 rounded-3xl border border-white/10"
          >

            <h3 className="text-2xl font-bold">
              Design & Branding
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Photoshop, Illustrator, Canva and Figma help us
              build premium visual identities and marketing creatives.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#101b2c] p-8 rounded-3xl border border-white/10"
          >

            <h3 className="text-2xl font-bold">
              Productivity & Planning
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Notion enables our team to manage projects,
              streamline workflows and deliver campaigns efficiently.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}