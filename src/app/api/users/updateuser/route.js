import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";


connect()

export async function POST(NextRequest) {
    try {

        const reqbody = await NextRequest.json()
        const { thought, color, typer } = reqbody
        // console.log(reqbody);

        if (thought === "") {
            return NextResponse.json({
                error: "input is not given",
                Status: 400,
            })
        }

        const cookieStore = cookies()
        let cookie = cookieStore.get("token")
        let tokenvalue = cookie?.value
        // console.log(cookie.value);

        if (!cookie) {
            return NextResponse.json({
                error: "cookie not found",
                Status: 400,
            })
        }

        let userdetail = jwt.verify(tokenvalue, process.env.TOKENSECRET,)
        // console.log(userdetail.id);

        let user = await User.findByIdAndUpdate(userdetail.id, { $set: { thought: thought, color: color, typer: typer } })
        await user.save()

        // console.log(updateduser);

        return NextResponse.json({
            message: "user saved sucessfully",
            Status: 200,
        })


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
            Status: "400"
        })
    }
}