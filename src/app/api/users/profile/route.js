import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(NextRequest) {
    try {
        const reqbody = await NextRequest.json()
        const { username } = reqbody

        const user = await User.findOne({ username }).select("-password ")
        // console.log(user);

        if (!user) {
            return NextResponse.json({
                error: "user not found",
                Status: 400,
            })
        }

        return NextResponse.json({
            user,
            message: "User found",
            Status: 200,
        })

    } catch (error) {
        return NextResponse.json({
            error: error.message,
            Status: 400
        })
    }
}