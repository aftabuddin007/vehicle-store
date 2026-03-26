import connectDb from "@/lib/connectDB";
import User from "@/model/user.model";
import { exists } from "fs";
import { NextResponse } from "next/server";

export async function GET (){
    try{
        await connectDb()
        const admin = await User.findOne({role:"admin"})
        return NextResponse.json({
            exists:!!admin
        })
    }
    catch (err){
        return NextResponse.json({
            message:`check-admin error ${err}`
        },{status:500})
    }
}