import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function SoftwareWeUse() {
  const software = [
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "DaVinci Resolve",
    "Canva Pro",
    "Meta Ads Manager",
    "Google Analytics",
    "CapCut Pro",
    "ChatGPT",
    "Notion",
    "Figma",
  ];

  return (
    <div className="min-h-screen bg-[#07101d] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <Link
          to="/"
          className="inline-flex items-center gap-3 text-yellow-400"
        >
          <FaArrowLeft />
          Back Home
        </Link>

        <h1 className="text-6xl font-black mt-10">
          Software
          <span className="text-yellow-400"> We Use</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {software.map((item, index) => (
            <div
              key={index}
              className="bg-[#101b2c] p-8 rounded-3xl border border-white/10 hover:border-yellow-400 transition"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}