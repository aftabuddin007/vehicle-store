"use client"; 

import axios from 'axios';
import { AnimatePresence,motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';

const EditVendorDetails =  () => {
    const [shopName,setShopName] = useState("")
    const [shopAddress,setShopAddress] = useState("")
    const [loading,setLoading]= useState(false)
    const router = useRouter()
   const handleSubmit =async (e:React.FormEvent)=>{
    e.preventDefault()
    if(!shopName || !shopAddress){
        alert("Please enter your shop name and address to continue")
        return;
    }
setLoading(true)
try{
    const result = await axios.post("/api/vendor/editDetails",{shopName,shopAddress})
    console.log(result.data);
    alert("Shop details updated successfully")
    setLoading(false)
    router.push("/")
}
catch(err){
     setLoading(false)
    console.log(err);
}

}
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' >
           <AnimatePresence>
            <motion.div 
                initial={{opacity:0,y:40}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5}}
                exit={{opacity:0,y:-40}}
                className='w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl '
            >
                <h3 className="text-3xl font-semibold text-center">Complete your shop details</h3>
                <p className="text-sm text-gray-300 mb-6 text-center mt-3">Enter Your business information to activate your vendor account</p>
                
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    <div className="relative">
                        <AiOutlineShop className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={24} />
                        <input 
                            type="text"
                            placeholder='Shop Name'
                            required
                            className='w-full p-3 pl-12 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400' 
                            onChange={(e)=>setShopName(e.target.value)} 
                            value={shopName}
                        />
                    </div>
                    
                    <div className="relative">
                        <AiOutlineHome className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={24} />
                        <input 
                            type="text"
                            placeholder='Shop Address'
                            required
                            className='w-full p-3 pl-12 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400' 
                            onChange={(e)=>setShopAddress(e.target.value)} 
                            value={shopAddress}
                        />
                    </div>
                    
                    {/* Add submit button */}
                    <button 
                        type="submit"
                        className='mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-300'
                    >
                        Save & Continue
                    </button>
                </form>
            </motion.div>
            </AnimatePresence> 
        </div>
    );
};

export default EditVendorDetails;