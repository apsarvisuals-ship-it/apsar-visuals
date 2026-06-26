import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {

  const faqs=[

    {
      question:"How long before I see results?",
      answer:"Most clients begin to notice improvements in engagement within the first month. Business growth depends on your industry, content quality and advertising budget."
    },

    {
      question:"Do you shoot videos for clients?",
      answer:"Yes. We provide professional video production, product shoots, promotional reels and branding content."
    },

    {
      question:"Is the Meta Ads budget included in your package?",
      answer:"No. Our package covers campaign management. The advertising budget is paid directly to Meta."
    },

    {
      question:"Can you manage both Instagram and Facebook?",
      answer:"Yes. Our Performance and Elite packages include complete Meta platform management."
    },

    {
      question:"Do you provide monthly reports?",
      answer:"Yes. Scale, Performance and Elite packages include detailed analytics and monthly reports."
    }

  ];

  const [active,setActive]=useState(0);

  return(

    <section
      id="faq"
      className="py-28 bg-[#07101d]"
    >

      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-yellow-400">

            FAQ

          </p>

          <h2 className="text-5xl font-black mt-4">

            Frequently Asked

            <span className="text-yellow-400">

              {" "}Questions

            </span>

          </h2>

        </div>

        <div className="mt-20 space-y-6">

          {faqs.map((faq,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:30}}

              whileInView={{opacity:1,y:0}}

              className="bg-[#101b2c] rounded-2xl overflow-hidden border border-white/10"

            >

              <button

                onClick={()=>setActive(active===index?-1:index)}

                className="w-full flex justify-between items-center p-7 text-left"

              >

                <h3 className="text-xl font-semibold">

                  {faq.question}

                </h3>

                <FaChevronDown
                  className={`duration-300 ${
                    active===index ? "rotate-180 text-yellow-400":""
                  }`}
                />

              </button>

              {active===index && (

                <div className="px-7 pb-7 text-gray-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}