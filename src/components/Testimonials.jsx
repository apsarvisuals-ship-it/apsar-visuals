import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {

  const testimonials = [

    {
      name: "Arun Kumar",
      company: "Restaurant Owner",
      review:
        "Apsar Visuals completely transformed our Instagram presence. Our customer enquiries increased significantly within two months."
    },

    {
      name: "Priya Sharma",
      company: "Boutique Owner",
      review:
        "Professional team, creative content and excellent communication. Their reels brought great engagement."
    },

    {
      name: "Rahul S",
      company: "Real Estate Consultant",
      review:
        "The Meta Ads campaign generated quality leads and helped us reach a much wider audience."
    }

  ];

  return (

    <section
      id="testimonials"
      className="py-28 bg-[#08111F]"
    >

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-yellow-400">

            Testimonials

          </p>

          <h2 className="text-5xl font-black mt-4">

            What Our

            <span className="text-yellow-400">

              {" "}Clients Say

            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:40}}

              whileInView={{opacity:1,y:0}}

              transition={{delay:index*.15}}

              whileHover={{
                y:-10,
                scale:1.02
              }}

              className="bg-[#101b2c] rounded-3xl p-10 border border-white/10 hover:border-yellow-400 duration-300"

            >

              <FaQuoteLeft className="text-yellow-400 text-4xl"/>

              <div className="flex gap-1 mt-6 text-yellow-400">

                <FaStar/>

                <FaStar/>

                <FaStar/>

                <FaStar/>

                <FaStar/>

              </div>

              <p className="text-gray-300 leading-8 mt-6">

                "{item.review}"

              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl">

                  {item.name}

                </h3>

                <p className="text-gray-400">

                  {item.company}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}