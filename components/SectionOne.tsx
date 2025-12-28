"use client"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
function SectionOne() {

   const controls = useAnimation(); // Controls the animation
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 }); // Detects visibility
      
        useEffect(() => {
          if (inView) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        }, [controls, inView])

  const [count97, setCount97] = useState(0)
  const [count84, setCount84] = useState(0)
  const [count92, setCount92] = useState(0)

  const intervalRef97 = useRef<NodeJS.Timeout | null>(null)
  const intervalRef84 = useRef<NodeJS.Timeout | null>(null)
  const intervalRef92 = useRef<NodeJS.Timeout | null>(null)

  const startCounting = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, intervalRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    let current = 0
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval)
      } else {
        current += 1
        setter(current)
      }
    }, 15) // speed per tick
    intervalRef.current = interval
  }

  useEffect(() => {
    // Starting the three counters
    startCounting(97, setCount97, intervalRef97)
    startCounting(84, setCount84, intervalRef84)
    startCounting(92, setCount92, intervalRef92)

    // Restart the three couters
    const resetInterval = setInterval(() => {
      setCount97(0)
      setCount84(0)
      setCount92(0)
      startCounting(97, setCount97, intervalRef97)
      startCounting(84, setCount84, intervalRef84)
      startCounting(92, setCount92, intervalRef92)
    }, 20000)

    return () => {
      clearInterval(resetInterval)
      if (intervalRef97.current) clearInterval(intervalRef97.current)
      if (intervalRef84.current) clearInterval(intervalRef84.current)
      if (intervalRef92.current) clearInterval(intervalRef92.current)
    }
  }, [])
  return (
    <div className=" flex flex-col md:flex-row px-3 md:px-0 w-full gap-[35px]">
      
        <div className="md:w-1/2 ">
        <motion.section
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }} className="">
                      <div className="space-y-12 ">
            <div className="space-y-4">
            <h2 className="Header leading-[45px]">Nutrition is the foundation for longer, healthier lives in dogs.</h2>
            <p className="text-[16px] font-normal text-[#424153]">Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.</p>
            </div>
            <div className="space-y-4">
            <h4 className="text-[19px] font-semibold text-[#161723]">Key Points:</h4>
            <ul className="space-y-4">
                <li className="ListPoints">
                    <div className="OrangeNum">{count97}%</div>
                    <div className="text-[16px] font-normal text-[#424153]">Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</div>
                </li>
                <li className="ListPoints">
                    <div className="OrangeNum">{count84}%</div>
                    <div className="text-[16px] font-normal text-[#424153]">Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</div>
                </li>
                <li className="ListPoints">
                    <div className="OrangeNum">{count92}%</div>
                    <div className="text-[16px] font-normal text-[#424153]">Our dog food's high protein and fat digestibility contribute to ideal stool quality.</div>
                </li>
            </ul>
            </div>
            <Link
              href="https://alienartech.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#EE6F4B] w-full block text-white hover:text-[#EE6F4B] text-[18px] text-center font-semibold hover:bg-transparent border-2 hover:border-[#EE6F4B] transition-all duration-500 ease-in-out py-3 mr-4 rounded-md`}
            >
              Get your dog's healthy meal today!
             </Link>
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
                    }} className="">
             <Image
                  src="/asset/images/Section-1-IMG.png"
                  alt="SectionOne"
                  width={2280} 
                  height={2280} 
                  className="w-full max-w-[570px] object-contain"
                />
                </motion.section>
        </div>
    </div>
  )
}

export default SectionOne