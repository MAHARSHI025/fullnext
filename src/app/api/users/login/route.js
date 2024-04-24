import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(NextRequest) {
    try {

        const reqbody = await NextRequest.json()
        const { email, password } = reqbody
        console.log(reqbody);

        const user = await User.findOne({ email })
        if (!user) {
            console.log("User not found");
            return NextResponse.json({
                message:"user not found",
                Status:"200"
            })
        }

        const validpassword = await bcryptjs.compare(password, user.password)
        if (!validpassword) {
            console.log("invalid password");
            return NextResponse.json({
                message:"invalid password",
                Status:"200"
            })
        }

        const tokendata = {
            id: user._id,
            username: user.username,
            email: user.email,
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