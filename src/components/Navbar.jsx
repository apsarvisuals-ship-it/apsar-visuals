import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Packages",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08111F]/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="logo"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold tracking-wider text-white">
              APSAR
            </h1>

            <p className="text-yellow-400 text-xs tracking-[6px]">
              VISUALS
            </p>
          </div>
        </div>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-10 text-white font-medium">

          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

              </a>
            </li>
          ))}

        </ul>

        {/* Social */}

<div className="hidden lg:flex gap-5 text-xl">

  <a
    href="https://www.instagram.com/apsar_visuals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition hover:scale-110"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.facebook.com/your_page_name"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition hover:scale-110"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://wa.me/917539954632"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition hover:scale-110"
  >
    <FaWhatsapp />
  </a>

</div>

        {/* Mobile */}

        <button
          onClick={() => setMobile(!mobile)}
          className="lg:hidden text-2xl text-white"
        >
          {mobile ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobile && (
        <div className="lg:hidden bg-[#08111F]">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-8 py-4 border-b border-gray-700 hover:bg-yellow-500 hover:text-black"
            >
              {item}
            </a>
          ))}

        </div>
      )}
    </motion.nav>
  );
}