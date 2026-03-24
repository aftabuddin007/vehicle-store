'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react"
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
const Register = () => {
    const [step,setStep] = useState<1 |2>(1);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const router = useRouter();
    const [loading,setLoading] =useState(false);
    const handleSignUp = async (e:React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
        try{
            const result = await axios.post("/api/auth/register",{name,email,password})
            console.log(result.data);
            setLoading(false)
            setEmail("")
            setName("")
            setPassword("")
            router.push("/login")
        }
        catch(error){
            console.log(error);
            setLoading(false)
        }

    }
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6'>
            
          <AnimatePresence mode="wait">
            
            
            {/* for step 1 ui */}
{step == 1 && <motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className='w-full max-w-lg text-center bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-white/20'>
<h1 className='text-4xl font-bold mb-4 text-blue-400'>Welcome to Vehicle Store</h1>
<p className="text-gray-300 mb-6">Register with one of the following account types:</p>
<div className="grid grid-cols-3 gap-4 mb-6">
    {
        [
            {label:"User",icon:"🧞‍♀️",value:"user"},
            {label:"Vendor",icon:"👮‍♂️",value:"vendor"},
            {label:"Admin",icon:"🕵️‍♀️",value:"admin"},
        ].map((item)=>(<motion.div key={item.value}
        whileHover={{scale : 1.1}}
        whileTap={{scale:0.95}}    
        className='p-4 bg-white/5 hover:bg-white/20 cursor-pointer rounded-xl border border-white/30 shadow-lg flex flex-col items-center transition'
        
        >
<span className='text-4xl mb-2'>{item.icon}</span>
<span className='text-sm font-medium'>{item.value}</span>
        </motion.div>))
    }
</div>
<motion.button
onClick={()=>setStep(2)}
 whileHover={{scale : 1.1}}
        whileTap={{scale:0.95}} 
className='mt-4 w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium'>
    Next➡️
</motion.button>
</motion.div>}
{/* for step 2 ui */}
{step == 2 && <motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
exit={{opacity:0,y:-40}}
className='w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20'
>
<h1 className="text-2xl font-semibold text-center mb-6 text-blue-300">Create your account</h1>
<form onSubmit={handleSignUp} className="space-y-4">

    {/* Name */}
    <input
        type="text"
        required
        placeholder="Full Name"
        onChange={(e)=>setName(e.target.value)} value={name}
        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
    />

    {/* Email */}
    <input
        type="email"
        required
        onChange={(e)=>setEmail(e.target.value)} value={email}
        placeholder="Email Address"
        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
    />

    {/* Password */}
    <input
        type="password"
        placeholder="Password"
        required
        onChange={(e)=>setPassword(e.target.value)} value={password}
        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
    />

    {/* Submit Button */}
    <motion.button
    disabled={loading}
        type="submit"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium mt-4"
    >
        {loading?<ClipLoader size={20} color='white'/>: "Register 🚀"}
    </motion.button>

<div className="flex items-center gap-3 my-4">
    <div className="flex-1 h-px bg-gray-600"></div>
    <span className="text-sm text-gray-400">OR</span>
    <div className="flex-1 h-px bg-gray-600"></div>
</div>

{/* Google Button */}
<motion.button
    type="button"
    // onClick={() => signIn("google")}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full py-3 bg-white text-black rounded-xl font-medium flex items-center justify-center gap-2"
>
    <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        className="w-5 h-5"
    />
    Continue with Google
</motion.button>

<p className="text-center text-sm mt-4 text-gray-400">Already have an account{""} <span 
onClick={()=>router.push("/login")}
className='text-blue-400 hover:underline hover:text-blue-300 transition cursor-pointer'>SignIn</span></p>


    {/* Back Button */}
    <button
        type="button"
        onClick={() => setStep(1)}
        className="w-full text-sm text-gray-300 mt-2 hover:underline"
    >
        ⬅ Back
    </button>

</form>
</motion.div>}
</AnimatePresence>  
        </div>
    );
};

export default Register;