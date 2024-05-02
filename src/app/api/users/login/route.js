import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { sendEmail } from "@/helper/mailer";

connect()

export async function POST(NextRequest) {
    try {

        const reqbody = await NextRequest.json()
        const { email, password } = reqbody
        console.log(reqbody);

        if (email === "" || password === "") {
            return NextResponse.json({
                error:"Input required",
                Status:200
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            console.log("User not found");
            return NextResponse.json({
                error:"user not found",
                Status:"200"
            })
        }
        
        const validpassword = await bcryptjs.compare(password, user.password)
        if (!validpassword) {
            console.log("invalid password");
            return NextResponse.json({
                error:"invalid password",
                Status:"200"
            })
        }
        if (user.isverified === false) {
            await sendEmail({email, emailType:"VERIFY", userId:user._id })
            console.log("User is not verified");
            return NextResponse.json({
                error:"User is not verified",
                Status:"200"
            })
        }

        const tokendata = {
            id: user._id,
            username: user.username,
            email: user.email,
            thought: user.thought,
            verified: user.isverified,
        }
        const token = jwt.sign(tokendata, process.env.TOKENSECRET, { expiresIn: '1h' })

        const response = NextResponse.json({
            message: "User login successfully",
            Status: "201"
        })
        response.cookies.set("token", token, { httpOnly: true })

        return response


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
            Status: "400"
        })
    }
}