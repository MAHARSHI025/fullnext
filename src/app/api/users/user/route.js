import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse, userAgentFromString } from "next/server";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import User from "@/models/usermodel";

connect()

export async function POST(NextRequest) {

    try {
        const cookieStore = cookies()
        let cookie = cookieStore.get("token")
        let tokenvalue = cookie?.value
        // console.log(cookie.value);

        if (!cookie ) {
            return NextResponse.json({
                // tokenvalue,
                error:"cookie not found",
                Status: 400,
            })
        }

        let userdetail  = jwt.verify(tokenvalue,process.env.TOKENSECRET,)
        // console.log(userdetail);

        let user = await User.findById(userdetail.id)

        if (!userdetail) {
            return NextResponse.json({
                error:"user not found",
                Status: 400,
            })
        }

        return NextResponse.json({
            // userdetail,
            user,
            message:"cookie found",
            Status: 200,
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: error,
            Status: "400"
        })
    }
}