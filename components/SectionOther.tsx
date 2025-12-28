"use client"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image"
import { useEffect} from "react"
import { InfoSection } from "@/lib/typescript";
function SectionOther({ flip, header, body, image }: InfoSection) {

    const controls = useAnimation(); // Controls the animation
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 }); // Detects visibility
      
        useEffect(() => {
          if (inView) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        }, [controls, inView])

  return (
    <div className={`flex flex-col items-center w-full gap-[35px] px-3 ${
        flip ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="md:w-1/2">
         <motion.section
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }} className="">
        <div className="space-y-4">
            <h2 className="Header leading-[45px]">{header}</h2>
            <p className="text-[16px] font-normal text-[#424153]">{body}</p>
        </div>
        </motion.section>  
        </div>
          <div className="md:w-1/2">
                <motion.section
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                              hidden: { opacity: 0, x: 50 },
                              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                            }}  className="h-[480px] overflow-hidden bg-amber-600 rounded-[10px]"
                            >
                            <Image
                                src={image}
                                alt="image"
                                width={2280}
                                height={1920}
                                className="w-full h-full max-w-[570px] object-cover"
                            />
                        </motion.section>
                </div>
    </div>
  )
}

export default SectionOther