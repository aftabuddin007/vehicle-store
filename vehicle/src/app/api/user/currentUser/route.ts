import { auth } from "@/auth";
import connectDb from "@/lib/connectDB";
import User from "@/model/user.model";
import { NextResponse } from "next/server";

export async function GET() { 
    try{
        await connectDb()
        const session = await auth()
        const user = await User.findOne({email:session?.user?.email}).select("-password")
        if(!user){
            return NextResponse.json({message:"User not found"},{status:404})
        }
        return NextResponse.json({user},{status:200})
    }
    catch(err){
        return NextResponse.json({message:`get current user  error ${err}`},{status:500})
    }
}
