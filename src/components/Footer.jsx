import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#07101d] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-3 gap-10">

          <div>

            <img
              src="/logo.png"
              className="w-20"
            />

            <h2 className="text-3xl font-bold mt-5">

              APSAR VISUALS

            </h2>

            <p className="text-gray-400 mt-5 leading-8">

              Crafting Visuals That Speak.
              We help businesses grow through
              creative content and digital marketing.

            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold">

              Quick Links

            </h3>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li><a href="#about">About</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#packages">Packages</a></li>

              <li><a href="#portfolio">Portfolio</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          <div>

            <h3 className="text-2xl font-bold">

              Follow Us

            </h3>

            <div className="flex gap-5 mt-6 text-3xl">

              <FaInstagram className="hover:text-yellow-400 cursor-pointer"/>

              <FaFacebook className="hover:text-yellow-400 cursor-pointer"/>

              <FaWhatsapp className="hover:text-yellow-400 cursor-pointer"/>

              <FaYoutube className="hover:text-yellow-400 cursor-pointer"/>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">

          © {new Date().getFullYear()} APSAR VISUALS. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}