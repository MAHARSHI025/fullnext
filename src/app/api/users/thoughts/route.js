import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import Liker from "@/models/Likemodel";
import Comment from "@/models/Commentmodel";

connect()

export async function POST(req) {
    try {

        const cookieStore = cookies()
        const token = cookieStore.get('token')
        // console.log(token);

        if (token === undefined || token === "") {
            return NextResponse.json({
                error: "Unauthorize user",
                Status: "400"
            })
        }


        const decodedtoken = jwt.verify(token.value, process.env.TOKENSECRET)
        const consumer = await User.findById(decodedtoken?.id)
        let taker = consumer.username

        const user = await User.find({ isverified: true }).populate("likes","",Liker).populate("comments","",Comment)
        // .populate("likes comments")

        const shuffledArray = user;
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        console.log(shuffledArray);

        return NextResponse.json({
            taker,
            user,
            message: "Authorized successfull",
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
