import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Software",
    "Services",
    "Portfolio",
    "Packages",
    "Contact",
  ];

  const socials = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/apsar_visuals",
    },
    { icon: <FaFacebookF />, href: "https://www.facebook.com" },
    { icon: <FaWhatsapp />, href: "https://wa.me/917539954632" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div
          className={`
            relative
            flex items-center justify-between
            px-6 sm:px-8 py-3.5
            rounded-full
            border
            transition-all duration-500
            ${
              scrolled
                ? "bg-[#08111F]/85 backdrop-blur-2xl border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
                : "bg-white/[0.04] backdrop-blur-lg border-white/10"
            }
          `}
        >
          {/* subtle top-edge glow line */}
          <div
            className="
              pointer-events-none
              absolute inset-x-8 top-0
              h-px
              bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent
            "
          />

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            <motion.img
              whileHover={{ rotate: -6, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
              src="/logo.jpg"
              alt="logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-[0_0_12px_rgba(250,204,21,0.35)]"
            />

            <div>
              <h1 className="text-lg sm:text-xl font-extrabold leading-none bg-gradient-to-r from-white via-white to-yellow-300 bg-clip-text text-transparent tracking-wide">
                APSAR
              </h1>

              <p className="text-[10px] text-yellow-400/90 tracking-[4px] mt-1 group-hover:tracking-[6px] transition-all duration-300">
                VISUALS
              </p>
            </div>
          </a>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActive(item)}
                  className="group relative px-4 py-2 block"
                >
                  <span
                    className={`
                      relative z-10 transition-colors duration-300
                      ${
                        active === item
                          ? "text-yellow-400"
                          : "text-white/85 group-hover:text-yellow-400"
                      }
                    `}
                  >
                    {item}
                  </span>

                  {/* hover fill */}
                  <span
                    className="
                      absolute inset-0
                      rounded-full
                      bg-yellow-400/10
                      scale-75 opacity-0
                      group-hover:scale-100 group-hover:opacity-100
                      transition-all duration-300
                    "
                  />

                  {/* active/hover underline */}
                  <span
                    className={`
                      absolute left-4 right-4 -bottom-0.5
                      h-[2px]
                      bg-gradient-to-r from-yellow-400 to-yellow-200
                      rounded-full
                      origin-left
                      transition-transform duration-300
                      ${
                        active === item
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}

          <div className="hidden lg:flex items-center gap-3 text-base">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  text-white
                  hover:text-black
                  hover:bg-yellow-400
                  hover:border-yellow-400
                  hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobile(!mobile)}
            aria-label="Toggle menu"
            className="
              lg:hidden
              w-10 h-10
              flex items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              text-white text-lg
              hover:text-yellow-400 hover:border-yellow-400/50
              transition-all duration-300
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobile ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {mobile ? <FaTimes /> : <FaBars />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {mobile && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                lg:hidden
                mt-4
                rounded-3xl
                overflow-hidden
                bg-[#08111F]/95
                backdrop-blur-2xl
                border
                border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              "
            >
              {links.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActive(item);
                    setMobile(false);
                  }}
                  className={`
                    flex items-center justify-between
                    px-8 py-4
                    border-b border-white/10
                    transition-colors duration-200
                    ${
                      active === item
                        ? "bg-yellow-400 text-black font-semibold"
                        : "text-white/90 hover:bg-yellow-400 hover:text-black"
                    }
                  `}
                >
                  {item}
                  <span className="text-xs opacity-60">0{i + 1}</span>
                </motion.a>
              ))}

              <div className="flex justify-center gap-4 py-6">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10
                      flex items-center justify-center
                      rounded-full
                      border border-white/10
                      text-white text-lg
                      hover:text-black hover:bg-yellow-400 hover:border-yellow-400
                      transition-all duration-300
                    "
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
