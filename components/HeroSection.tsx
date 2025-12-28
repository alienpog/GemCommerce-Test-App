"use client"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { features } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheckIcon } from "lucide-react";

function HeroSection() {
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
    <div className=" py-14 space-y-12 ">
        <motion.section
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }} className=" ">
        <h1 className="mx-auto max-w-lg text-center Header px-3 md:px-0">What makes us different makes them stronger</h1>
        </motion.section>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] px-3">
            <motion.section
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }} className="space-y-10">
          {features.slice(0, 2).map((feature) => (
  <div key={feature.name} className="flex items-start space-x-6">
  <Image
      src={feature.icon}
      alt={feature.name}
      width={60} 
      height={60}  
      className="object-contain"
    />
    <div className="space-y-2">

      <h4 className="text-[19px] font-semibold text-[#161723]">
        {feature.name}
      </h4>
      <p className="text-[16px] font-normal text-[#424153] w-full max-w-[286px]">
        {feature.content}
      </p>
    </div>
  </div>
))}

        </motion.section> 
        <Image
      src="/asset/images/Hero-Section-img.png"
      alt="Hero-Section"
      width={1480} 
      height={1480} 
      className="w-full max-w-[370px] object-contain"
    />
     <motion.section
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }} className="space-y-10">
          {features.slice(2, 4).map((feature) => (
  <div key={feature.name} className="flex items-start space-x-6">
  <Image
      src={feature.icon}
      alt={feature.name}
      width={60} 
      height={60}  
      className="object-contain"
    />
    <div className="space-y-2">
      <h4 className="text-[19px] font-semibold text-[#161723]">
        {feature.name}
      </h4>
      <p className="text-[16px] font-normal text-[#424153] w-full max-w-[286px]">
        {feature.content}
      </p>
    </div>
  </div>
))}

        </motion.section>
        </div>
        <div className=" w-full flex justify-center items-center">
          <motion.section
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }} className=""> 
        <div className="flex flex-col space-y-4 items-center max-w-lg w-full px-3">
        <Link
          href="https://alienartech.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-[#EE6F4B] w-full max-w-[460px] text-white hover:text-[#EE6F4B] text-[18px] text-center font-semibold hover:bg-transparent border-2 hover:border-[#EE6F4B] transition-all duration-500 ease-in-out py-3 rounded-md`}
        >
          Get your dog's healthy meal today!
        </Link>
        <div className="flex space-x-6">
            <div className="flex space-x-2 items-center text-[#424153] font-normal text-[13px]">
            <ShieldCheckIcon className="size-4 text-[#424153]"/>
            <p>30-day money back guarantee</p>
            </div>
            <ul className="flex space-x-2">
                <li className=" w-[39.2px] flex items-center "><Image
                src="/asset/images/bankIcon/paypal.png"
                alt="Hero-Section"
                width={157} 
                height={96} 
                className="w-full max-h-[24px] object-contain"
                /></li>
                <li className=" w-[39.2px] flex items-center"><Image
                src="/asset/images/bankIcon/visa.png"
                alt="Hero-Section"
                width={157} 
                height={96} 
                className="w-full max-h-[24px] object-contain"
                /></li><li className=" w-[39.2px] flex items-center"><Image
                src="/asset/images/bankIcon/mastercard.png"
                alt="Hero-Section"
                width={157} 
                height={96} 
                className="w-full max-h-[24px] object-contain"
                /></li><li className=" w-[39.2px] flex items-center"><Image
                src="/asset/images/bankIcon/Apple-Pay.png"
                alt="Hero-Section"
                width={157} 
                height={96} 
                className="w-full max-h-[24px] object-contain"
                /></li><li className=" w-[39.2px] flex items-center"><Image
                src="/asset/images/bankIcon/Google-Pay.png"
                alt="Hero-Section"
                width={157} 
                height={96} 
                className="w-full max-h-[24px] object-contain"
                /></li>
            </ul>
        </div>
        </div>
        </motion.section>
        </div>
    </div>
  )
}

export default HeroSection