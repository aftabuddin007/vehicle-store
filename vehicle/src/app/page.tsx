import { auth } from '@/auth';
import EditRoleAndPhone from '@/component/EditRoleAndPhone';
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
    <div>
      
    </div>
  );
};

export default Home;