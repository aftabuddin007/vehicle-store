"use client"
import React, { useEffect, useState } from 'react';
import { AnimatePresence ,motion} from 'motion/react';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";





const CategorySlider = () => {
    const [startIndex,setStartIndex]=useState(0)
    const categories = [
  {
    label: "All Vehicles",
    icon: "🚗"
  },
  {
    label: "Cars",
    icon: "🚘"
  },
  {
    label: "Motorbikes",
    icon: "🏍️"
  },
  {
    label: "Trucks",
    icon: "🚚"
  },
  {
    label: "Buses",
    icon: "🚌"
  },
  {
    label: "Electric Vehicles",
    icon: "⚡🚗"
  },
  {
    label: "Tyres",
    icon: "🛞"
  },
  {
    label: "Spare Parts",
    icon: "🔧"
  },
  {
    label: "Engine Parts",
    icon: "⚙️"
  },
  {
    label: "Fuel",
    icon: "⛽"
  },
  {
    label: "Engine Oil",
    icon: "🛢️"
  },
  {
    label: "Battery",
    icon: "🔋"
  }
];
const NextSlice = ()=>{
    setStartIndex((prev)=>(prev + 5) % categories.length)
}
const prevSlice = ()=>{
    setStartIndex((prev)=>prev - 5 < 0 ?  categories.length - 5 : prev - 5)
}
useEffect(()=>{
const interval = setInterval(NextSlice,5000)
return () => clearInterval(interval)
},[])
    return (
        <motion.div
        initial={{ opacity: 0, y: 60 }}
        viewport={{once:true}}
        transition={{ duration: 0.8 }}
        whileInView={{opacity:1,y:0}}
        className='w-full mx-auto p-8 text-center bg-gradient-to-br from-black via-gray-900 to-black relative mt-20'>
            <h2 className="text-3xl font-semibold mb-6 text-white">Shop by Categories</h2>
            <div className="relative overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.div 
                    initial={{x:120,opacity:0}}
                    animate={{x:0,opacity:1}}
                    exit={{x:-120,opacity:0}}
                    transition={{duration:0.5}}
                    key={startIndex} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'> 
                {
                    categories.slice(startIndex,startIndex+5).map((item,index)=>(
                        <motion.div key={index}
                        whileHover={{scale:1.08}}
                        className='bg-white/10 border border-white/20 p-6 rounded-xl cursor-pointer text-white'
                        
                        >
                            <span className='text-4xl mb-2 block'>{item.icon}</span>
                            <p className='text-sm font-medium'>{item.label}</p>

                        </motion.div>
                    ))
                }
                    </motion.div>
                </AnimatePresence>
                <button onClick={NextSlice} className="absolute left-0 top-1/2 border border-gray-500 -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full"><FaAngleLeft></FaAngleLeft></button>

                <button onClick={prevSlice} className="absolute right-0 top-1/2 border border-gray-500 -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full"><FaAngleRight></FaAngleRight></button>
            </div>
        </motion.div>
    );
};

export default CategorySlider;