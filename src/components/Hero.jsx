import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaPlayCircle,
  FaInstagram,
  FaFacebook,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Lightweight, dependency-free count-up component.
// Animates from 0 to `end` once the element scrolls into view.
function CountUp({ end, duration = 2.5, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;

          const startTime = performance.now();
          const durationMs = duration * 1000;

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // ease-out for a nice deceleration near the end
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#08111F]"
    >
      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Main Glow */}

        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      top-40
      left-0
      w-[450px]
      h-[450px]
      bg-yellow-400/10
      rounded-full
      blur-[140px]
    "
        />

        {/* Secondary Glow */}

        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      bottom-0
      right-0
      w-[350px]
      h-[350px]
      bg-blue-500/10
      rounded-full
      blur-[140px]
    "
        />

        {/* Grid */}

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

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-24 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12 lg:mt-16">
          {/* LEFT */}

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 mt-10"
            >
              <FaChartLine />
              Digital Marketing Agency
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight mt-8"
            >
              Grow Your
              <span className="text-yellow-400 block">Brand Faster</span>
              Through Content
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-300 text-lg md:text-xl leading-9 max-w-2xl"
            >
              We help businesses scale through premium reels, social media
              management, Meta Ads, influencer marketing and high-converting
              content strategies.
            </motion.p>

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                to="/services-we-offer"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 transition"
              >
                Explore Services
                <FaArrowRight />
              </Link>

              <a
                href="#software"
                className="border border-white/20 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full transition"
              >
                Software We Use
              </a>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <h3 className="text-4xl font-black text-yellow-400">
                  <CountUp end={100} duration={2.5} suffix="+" />
                </h3>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-yellow-400">
                  <CountUp end={50} duration={2.5} suffix="+" />
                </h3>
                <p className="text-gray-400 mt-2">Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-yellow-400">
                  <CountUp end={5} duration={2.5} suffix="M+" />
                </h3>
                <p className="text-gray-400 mt-2">Reach</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-5 shadow-2xl">
              <img
                src="/portfolio/1.jpg"
                alt="Apsar Visuals"
                className="rounded-3xl w-full h-[600px] object-cover"
              />

              {/* Floating Cards */}

              <div className="absolute top-10 right-10 bg-black/70 backdrop-blur-md px-5 py-4 rounded-2xl">
                <div className="flex items-center gap-3 text-yellow-400">
                  <FaInstagram />
                  <span>Instagram Growth</span>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 bg-black/70 backdrop-blur-md px-5 py-4 rounded-2xl">
                <div className="flex items-center gap-3 text-yellow-400">
                  <FaFacebook />
                  <span>Meta Ads</span>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 bg-yellow-400 text-black p-4 rounded-2xl">
                <FaPlayCircle size={28} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
