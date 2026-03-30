'use client'
import React, { useEffect, useState } from 'react';
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

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // ✅ Next & Prev
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className='relative w-full min-h-[90vh] overflow-hidden bg-black text-white  md:mt-[60px]'>

      {/* SLIDE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{opacity:0,scale:1.05}}
          animate={{opacity:1,scale:1}}
          exit={{opacity:0,scale:0.95}}
          transition={{duration:0.8}}
          className="absolute inset-0 flex justify-center items-center"
        >

          <Image 
            src={slides[current].image} 
            alt={slides[current].title} 
            className='object-cover opacity-70' 
            fill
          />

          {/* TEXT */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-24 bg-gradient-to-r from-black/70 to-transparent">

            <motion.h3
              className='text-sm md:text-base uppercase tracking-widest text-gray-300'
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.2}}
            >
              {slides[current].subtitle}
            </motion.h3>

            <motion.h1
              className='text-3xl md:text-6xl font-bold mt-2'
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.4}}
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              className='mt-4 max-w-md text-gray-200'
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.6}}
            >
              {slides[current].description}
            </motion.p>

            <motion.button
              className='mt-6 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200'
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.8}}
            >
              {slides[current].button}
            </motion.button>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* PREV BUTTON */}
      <button 
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 px-4 py-2 rounded-full"
      >
        ◀
      </button>

      {/* NEXT BUTTON */}
      <button 
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 px-4 py-2 rounded-full"
      >
        ▶
      </button>

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_,index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
      {/* SCROLL INDICATOR */}
<div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center">

  <span className="text-xs text-gray-300 mb-2">Scroll</span>

  <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
    <motion.div
      className="w-1 h-2 bg-white rounded-full"
      animate={{ y: [0, 12, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity
      }}
    />
  </div>

</div>

    </div>
  );
};

export default Slider;