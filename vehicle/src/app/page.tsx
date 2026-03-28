import { auth } from '@/auth';
import EditRoleAndPhone from '@/component/EditRoleAndPhone';
import Navbar from '@/component/Navbar';
import connectDb from '@/lib/connectDB';
import User from '@/model/user.model';
import { redirect } from 'next/navigation';
import React from 'react';

const Home = async () => {
  await connectDb()
  const session = await auth()
  const user = await User.findById(session?.user?.id)
  if(!user){
    redirect("/login")
  }

const inComplete = !user.role || !user.phone || (!user.phone && user.role == "user")

if(inComplete){
  return <EditRoleAndPhone></EditRoleAndPhone>
}



  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 '>
      <Navbar user={user}></Navbar>
    </div>
  );
};

export default Home;