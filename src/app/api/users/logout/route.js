import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function GET(NextRequest) {
    try {
        const response = NextResponse.json({
            message:"Logout successfully",
            Status:"200"
        })

        response.cookies.set("token","",{httpOnly:true})
        
        return response

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
            Status: "400"
        })
    }
}