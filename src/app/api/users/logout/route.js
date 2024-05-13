import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'


connect()

export async function GET(NextRequest) {
    try {

        const cookieStore = cookies()
        const hasCookie = cookieStore.has('token')
        // console.log(hasCookie);
        if (hasCookie === false) {
            return NextResponse.json({
                message: "Please Login first",
                Status: "400"
            })
        }

        const response = NextResponse.json({
            message: "Logout successfully",
            Status: "200"
        })

        response.cookies.delete("token")

        return response

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
            Status: "400"
        })
    }
}