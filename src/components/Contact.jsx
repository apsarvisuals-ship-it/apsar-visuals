import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#08111F]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-yellow-400">
            Contact
          </p>

          <h2 className="text-5xl font-black mt-4">
            Let's Grow
            <span className="text-yellow-400"> Your Brand</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Tell us about your business. We'll help you create content,
            manage social media and generate quality leads.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#101b2c] rounded-3xl p-10 border border-white/10"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#08111F] rounded-xl p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Business Name"
                className="bg-[#08111F] rounded-xl p-4 outline-none"
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#08111F] rounded-xl p-4 outline-none w-full mt-5"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-[#08111F] rounded-xl p-4 outline-none w-full mt-5"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="bg-[#08111F] rounded-xl p-4 outline-none w-full mt-5"
            />

            <button
              className="mt-8 bg-yellow-400 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition flex items-center gap-3"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </motion.form>

          {/* Contact Details */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >

            <div className="bg-[#101b2c] rounded-3xl p-8 border border-white/10 flex gap-5 items-center">
              <FaWhatsapp className="text-4xl text-yellow-400" />
              <div>
                <h3 className="font-bold text-xl">WhatsApp</h3>
                <p>+91 75399 54632</p>
              </div>
            </div>

            <div className="bg-[#101b2c] rounded-3xl p-8 border border-white/10 flex gap-5 items-center">
              <FaPhoneAlt className="text-4xl text-yellow-400" />
              <div>
                <h3 className="font-bold text-xl">Call Us</h3>
                <p>+91 75399 54632</p>
              </div>
            </div>

            <div className="bg-[#101b2c] rounded-3xl p-8 border border-white/10 flex gap-5 items-center">
              <FaEnvelope className="text-4xl text-yellow-400" />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p>apsarvisuals@mail.com</p>
              </div>
            </div>

            <div className="bg-[#101b2c] rounded-3xl p-8 border border-white/10 flex gap-5 items-center">
              <FaMapMarkerAlt className="text-4xl text-yellow-400" />
              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}