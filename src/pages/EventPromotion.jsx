import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaPlayCircle,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export default function StoryTelling() {
  const videos = [
    {
      title: "Emotional Storytelling",
      file: "/videos/Sneham_KP3_2.mp4",
      caption:
        "A cinematic storytelling reel designed to emotionally connect with the audience.",
      platform: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/reel/DXwmDPChVs_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

    {
      title: "Brand Story",
      file: "/videos/Sneham_KP3_2.mp4",
      caption:
        "Creative brand storytelling to improve engagement and build trust.",
      platform: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },

    {
      title: "Customer Journey",
      file: "/videos/Sneham_KP3_2.mp4",
      caption:
        "Visual storytelling that explains the customer's complete experience.",
      platform: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/",
    },

    {
      title: "Product Story",
      file: "/videos/story4.mp4",
      caption:
        "Showcasing products with cinematic storytelling techniques.",
      platform: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/",
    },

    {
      title: "Founder Story",
      file: "/videos/story5.mp4",
      caption:
        "A powerful founder introduction to build authenticity.",
      platform: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },

    {
      title: "Campaign Story",
      file: "/videos/story6.mp4",
      caption:
        "Marketing campaign designed for maximum audience retention.",
      platform: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07101d] text-white">

      {/* Header */}

      <section className="bg-gradient-to-b from-[#101b2c] to-[#07101d] py-20 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8">

          <Link
            to="/"
            className="inline-flex items-center gap-3 text-yellow-400 hover:text-yellow-300"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mt-8"
          >
            Story
            <span className="text-yellow-400"> Telling</span>
          </motion.h1>

          <p className="text-gray-400 mt-6 max-w-3xl leading-8">
            Storytelling is one of the most powerful ways to connect with an
            audience. Browse our storytelling portfolio below.
          </p>

        </div>

      </section>

      {/* Portfolio Grid */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {videos.map((video, index) => (

              <motion.a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ delay: index * 0.08 }}
                className="group bg-[#101b2c] rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400 duration-300 shadow-lg cursor-pointer"
              >

                <div className="relative">

                  <video
                    src={video.file}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-56 object-cover pointer-events-none"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 duration-300 flex items-center justify-center">

                    <div className="bg-black/60 rounded-full p-4">

                      <FaPlayCircle className="text-yellow-400 text-4xl" />

                    </div>

                  </div>

                </div>

                <div className="p-6">

                  <div className="flex items-center gap-2 text-yellow-400">

                    {video.icon}

                    <span className="text-sm">

                      View on {video.platform}

                    </span>

                  </div>

                  <h3 className="text-xl font-bold mt-4">

                    {video.title}

                  </h3>

                  <p className="text-gray-400 mt-3 text-sm leading-7">

                    {video.caption}

                  </p>

                </div>

              </motion.a>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-8">

          <div className="rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-16 text-center">

            <h2 className="text-4xl md:text-5xl font-black">

              Ready To Tell Your Story?

            </h2>

            <p className="mt-6 text-lg max-w-2xl mx-auto">

              Let's create content that connects with your audience and grows your brand.

            </p>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-900 transition"
            >
              Start Your Project
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}