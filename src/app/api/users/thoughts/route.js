import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest ,NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

connect()

export async function POST(req){
    try {

        const cookieStore = cookies()
        const token = cookieStore.get('token')
        console.log(token);

        if (token === undefined || token === "") {
            return NextResponse.json({
                error: "Unauthorize user",
                Status: "400"
            })
        }


        const decodedtoken = jwt.verify(token.value, process.env.TOKENSECRET)
        // const consumer = await User.findById(decodedtoken?.id)
        // console.log(consumer);
        
        const user = await User.find().select("-password -isverified -verifytoken -verifytokenexpiry")
        // console.log(user);

        return NextResponse.json({
            user,
            message: "Authorize successfull",
            success: true
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
            Status: "400"
        })
    }
}