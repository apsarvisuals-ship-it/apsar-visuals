import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {

  return (

    <a
      href="https://wa.me/917539954632"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-green-500
      flex items-center justify-center text-white text-3xl shadow-xl
      hover:scale-110 duration-300 z-50"
    >

      <FaWhatsapp />

    </a>

  );

}