'use client'

import { AnimatePresence,motion } from 'motion/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ClipLoader } from 'react-spinners';

const Login = () => {
const [loading,setLoading] =useState(false);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const router = useRouter();

const session = useSession()
console.log(session.data?.user);


const handleSignin = async (e:React.FormEvent)=>{
    setLoading(true)
    e.preventDefault()
    try{
const result = await signIn("credentials",{
    email,password,redirect:false
})
alert("Login successful");
router.push("/")
    }
    catch(err){console.log(err);
         setLoading(false)
    }
}




    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6'>
            <AnimatePresence>
                <motion.div
                initial={{opacity:0,y:40}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5}}
                exit={{opacity:0,y:-40}}
                className='w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20'
                >
                <h1 className="text-2xl font-semibold text-center mb-6 text-blue-300">Welcome back to Vehicle store</h1>
                <form onSubmit={handleSignin} className="space-y-4">
                
                   
                
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
                        {loading?<ClipLoader size={20} color='white'/>: "Login"}
                    </motion.button>
                
                <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-600"></div>
                    <span className="text-sm text-gray-400">OR</span>
                    <div className="flex-1 h-px bg-gray-600"></div>
                </div>
                
                {/* Google Button */}
                <motion.button
                    type="button"
                    onClick={() => signIn("google",{callbackUrl:"/"})}
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
                
                <p className="text-center text-sm mt-4 text-gray-400">Not have an account{""} <span 
                onClick={()=>router.push("/register")}
                className='text-blue-400 hover:underline hover:text-blue-300 transition cursor-pointer'>Signup</span></p>
                
                
                    
                
                </form>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Login;