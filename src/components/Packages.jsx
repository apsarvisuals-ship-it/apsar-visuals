import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function Packages() {

  const packages = [

    {
      name: "Starter",
      price: "₹7,999",
      features: [
        "8 Videos",
        "4 Posts",
      ]
    },

    {
      name: "Growth",
      price: "₹12,999",
      popular: true,
      features: [
        "8 Videos",
        "8 Posts",
        "10 Stories",
        "Instagram Handling"
      ]
    },

    {
      name: "Scale",
      price: "₹17,999",
      features: [
        "8 Videos",
        "10 Posts",
        "15 Stories",
        "Instagram Handling",
        "Monthly Analytics"
      ]
    },

    {
      name: "Performance",
      price: "₹24,999",
      features: [
        "8 Videos",
        "12 Posts",
        "20 Stories",
        "Instagram Handling",
        "Meta Ads",
        "Monthly Analytics"
      ]
    },

    {
      name: "Elite",
      price: "₹34,999",
      features: [
        "8 Videos",
        "12 Posts",
        "20 Stories",
        "Instagram Handling",
        "Facebook Handling",
        "Meta Ads",
        "Monthly Analytics"
      ]
    }

  ];

  return (

    <section
      id="packages"
      className="py-28 bg-[#07101d]"
    >

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-yellow-400">
            Pricing
          </p>

          <h2 className="text-5xl font-black mt-4">

            Our

            <span className="text-yellow-400">

              {" "}Packages

            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-5 gap-8 mt-20">

          {packages.map((pkg, index)=>(

            <motion.div

              key={index}

              whileHover={{
                y:-12,
                scale:1.03
              }}

              className={`relative rounded-3xl p-8 border duration-300

              ${pkg.popular
                ? "border-yellow-400 bg-gradient-to-b from-yellow-500/20 to-[#101b2c]"
                : "border-white/10 bg-[#101b2c]"
              }`}

            >

              {pkg.popular && (

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold">

                  MOST POPULAR

                </div>

              )}

              <h3 className="text-3xl font-bold">

                {pkg.name}

              </h3>

              <h2 className="text-yellow-400 text-5xl font-black mt-6">

                {pkg.price}

              </h2>

              <ul className="mt-8 space-y-4">

                {pkg.features.map((feature)=>(

                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <FaCheck className="text-yellow-400"/>

                    {feature}

                  </li>

                ))}

              </ul>

              <button
                className={`w-full mt-10 py-4 rounded-full font-bold transition

                ${pkg.popular
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "border border-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
              >

                Choose Plan

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}