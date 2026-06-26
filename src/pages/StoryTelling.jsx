import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaPlayCircle,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaExternalLinkAlt,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

export default function StoryTelling() {
  const videoRefs = useRef([]);
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: "Emotional Storytelling",
      file: "/videos/Sneham_KP_3.mp4",
      caption:
        "A cinematic storytelling reel designed to emotionally connect with the audience.",
      platform: "Instagram Reel",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/reel/DXwmDPChVs_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

    {
      title: "Brand Story",
      file:   "https://drive.google.com/uc?export=download&id=1lVu6q2TmvHAiy0p49rKKGZ5VmgW0Hx-d",
  caption: "A cinematic storytelling reel...",
      caption:
        "Creative brand storytelling to improve engagement and build trust.",
      platform: "Instagram Reel",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },

    {
      title: "Customer Journey",
      file: "/videos/Sneham_KP3_2.mp4",
      caption:
        "Visual storytelling that explains the customer's complete experience.",
      platform: "Facebook Video",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/",
    },

    {
      title: "Product Story",
      file: "/videos/story4.mp4",
      caption: "Showcasing products with cinematic storytelling techniques.",
      platform: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/",
    },

    {
      title: "Founder Story",
      file: "/videos/story5.mp4",
      caption: "A powerful founder introduction to build authenticity.",
      platform: "Instagram Reel",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },

    {
      title: "Campaign Story",
      file: "/videos/story6.mp4",
      caption: "Marketing campaign designed for maximum audience retention.",
      platform: "Instagram Reel",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },
  ];

  const playVideo = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i !== index) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });

    const current = videoRefs.current[index];

    if (!current) return;

    current.muted = false;
    current.controls = true;
    current.play();

    setActiveVideo(index);
  };

  const toggleMute = (index) => {
    const current = videoRefs.current[index];

    if (!current) return;

    current.muted = !current.muted;

    setActiveVideo(index);
  };

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
            className="text-6xl font-black mt-8"
          >
            Story
            <span className="text-yellow-400"> Telling</span>
          </motion.h1>

          <p className="text-gray-400 mt-6 max-w-3xl text-lg leading-8">
            Creative storytelling videos crafted for brands, creators and
            businesses.
          </p>
        </div>
      </section>

      {/* Portfolio */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="group w-[280px] rounded-3xl overflow-hidden bg-[#101b2c] border border-white/10 hover:border-yellow-400 shadow-xl"
              >
                {/* Video */}
                <div className="relative">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.file}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={activeVideo === index}
                    className="w-full aspect-[9/16] object-cover"
                  />

                  {/* Play Button */}
                  <button
                    onClick={() => playVideo(index)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition"
                  >
                    <div className="bg-black/70 p-4 rounded-full hover:scale-110 transition">
                      <FaPlayCircle className="text-5xl text-yellow-400" />
                    </div>
                  </button>

                  {/* Mute Button */}
                  {activeVideo === index && (
                    <button
                      onClick={() => toggleMute(index)}
                      className="absolute top-4 right-4 bg-black/70 p-3 rounded-full"
                    >
                      {videoRefs.current[index]?.muted ? (
                        <FaVolumeMute className="text-yellow-400 text-xl" />
                      ) : (
                        <FaVolumeUp className="text-yellow-400 text-xl" />
                      )}
                    </button>
                  )}
                </div>

                {/* Content */}

                <div className="p-5 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-3 py-2 rounded-full text-xs">
                      {video.icon}

                      <span>{video.platform}</span>
                    </div>

                    <h3 className="text-2xl font-bold mt-5">{video.title}</h3>

                    <p className="text-gray-400 mt-3 text-sm leading-7">
                      {video.caption}
                    </p>
                  </div>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-2 text-yellow-400 hover:text-white transition"
                  >
                    View Original
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-20 px-10 text-center shadow-2xl"
          >
            <h2 className="text-5xl font-black">Ready To Tell Your Story?</h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8">
              Let's create cinematic videos that attract attention, build trust
              and grow your business through storytelling.
            </p>

            <a
              href="https://wa.me/917539954632"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
