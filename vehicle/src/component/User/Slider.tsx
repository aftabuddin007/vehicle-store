'use client'
import React, { useState } from 'react';
import image1 from '@/assets/img1.jpg'
import image2 from '@/assets/img2.jpg'
import image3 from '@/assets/img3.jpg'
import { AnimatePresence ,motion} from 'motion/react';
import Image from 'next/image';
const Slider = () => {
 const [current,setCurrent] = useState(0)
const slides = [
     {
    image: image1,
    title: "LUXURY SEDAN",
    subtitle: "DRIVE IN STYLE",
    description: "Experience comfort and premium performance.",
    button: "EXPLORE",
  },
  {
    image: image2,
    title: "SPORTS CAR",
    subtitle: "FEEL THE SPEED",
    description: "High performance and thrilling speed.",
    button: "VIEW DETAILS",
  },
  {
    image: image3,
    title: "SUV POWER",
    subtitle: "GO ANYWHERE",
    description: "Perfect for family and off-road adventures.",
    button: "DISCOVER",
  }
];


    return (
        <div className='relative w-full min-h-[90vh] mt-0 overflow-hidden bg-black text-white pt-0 top-0 rounded-2xl md:mt-[60px]'>
           <AnimatePresence>
            
            <motion.div
            initial={{opacity:0,scale:1.05}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.8}}
    exit={{opacity:0,scale:0.95}}
            key={current} className="absolute inset-0 flex justify-center items-center">
<Image src={slides[current].image} alt={slides[current].title} className='object-cover opacity-70'></Image>

            </motion.div>
            </AnimatePresence> 
            
        </div>
    );
};

export default Slider;