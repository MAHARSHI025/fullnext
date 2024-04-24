import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/helper/mailer";

connect()

export async function POST(NextRequest){

    try {
        const reqbody = await NextRequest.json()
        const {username, email, password} = reqbody
        console.log(reqbody);

        if (username === "" || email === "" || password === "") {
            return NextResponse.json({
                error: "Input is required",
                Status: 400,
            })
        }

        const user = await User.findOne({email})
        if (user) {
            return NextResponse.json({
                error: "User already registered",
                Status: 400,
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedpassword =  await bcryptjs.hash(password, salt)

        const newuser = new User({
            email,
            username,
            password: hashedpassword,
        })
        const saveduser = await newuser.save()
        console.log(saveduser);

        await sendEmail({email, emailType:"VERIFY", userId:saveduser._id })

        return NextResponse.json({
            message:"user saved sucessfully",
            Status:400,
            saveduser
        })


    } catch (error) {
        return NextResponse.json({
            error: error.message,
            Status: 500
        })
    }
}