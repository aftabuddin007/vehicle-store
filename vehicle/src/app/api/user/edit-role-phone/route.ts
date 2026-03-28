import { auth } from "@/auth";
import connectDb from "@/lib/connectDB";
import User from "@/model/user.model";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        await connectDb()
        const {phone,role}=await req.json() 
        const session = await auth()
        const user = await User.findOneAndUpdate({email:session?.user?.email},{phone,role},{new:true})
        if(!user){
            return NextResponse.json({message:"User is not found"},
                {status:400}
            )
        }
        return NextResponse.json({user},{status:200})
    }
    catch(err){
         return NextResponse.json({message:`Edit role and phone error ${err}`},
                {status:500}
            )
    }
}