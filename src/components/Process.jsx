import { motion } from "framer-motion";
import {
  FaComments,
  FaLightbulb,
  FaVideo,
  FaRocket,
} from "react-icons/fa";

export default function Process() {

  const steps=[

    {
      icon:<FaComments/>,
      title:"Consultation",
      desc:"Understanding your business goals and target audience."
    },

    {
      icon:<FaLightbulb/>,
      title:"Strategy",
      desc:"Planning content, branding and marketing roadmap."
    },

    {
      icon:<FaVideo/>,
      title:"Content Creation",
      desc:"Creating premium videos, graphics and engaging content."
    },

    {
      icon:<FaRocket/>,
      title:"Launch & Growth",
      desc:"Publishing, running Meta Ads and optimizing performance."
    }

  ];

  return(

    <section
      id="process"
      className="py-28 bg-[#07101d]"
    >

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-yellow-400">

            Process

          </p>

          <h2 className="text-5xl font-black mt-4">

            How We

            <span className="text-yellow-400">

              {" "}Work

            </span>

          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:40}}

              whileInView={{opacity:1,y:0}}

              transition={{delay:index*.15}}

              whileHover={{y:-10}}

              className="relative bg-[#101b2c] rounded-3xl p-10 border border-white/10 hover:border-yellow-400 duration-300"

            >

              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">

                {index+1}

              </div>

              <div className="text-5xl text-yellow-400 mt-6">

                {step.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8">

                {step.title}

              </h3>

              <p className="text-gray-400 mt-5 leading-8">

                {step.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}