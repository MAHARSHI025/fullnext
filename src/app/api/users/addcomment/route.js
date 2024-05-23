import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Commenter from "@/models/Commentmodel";

connect();

export async function POST(req) {
    try {
        const { userName, comment } = await req.json();

        const cookieStore = cookies()
        const token = cookieStore.get('token')
        // console.log(token.value);
        if (token === undefined || token === "") {
            return NextResponse.json({
                error: "Unauthorize user",
                Status: "400"
            })
        }
        const decodedtoken = jwt.verify(token.value, process.env.TOKENSECRET)
        // console.log(decodedtoken);
        let usercomment = decodedtoken.username
        let tempuser = await User.findOne({ username: userName })
        let userId = tempuser._id

        const newcomment = await Commenter.create({ userName, usercomment: usercomment, comment: comment });

        await User.findByIdAndUpdate(userId, { $push: { comments: newcomment._id } }, { new: true });

        const updatedUser = await User.findById(userId).populate("comments");

        if (!updatedUser) {
            return NextResponse.json({
                error: "Failed to fetch updated user",
                status: "400"
            });
        }

        return NextResponse.json({
            user: updatedUser,
            message: "Comment added successfully",
            success: true
        });


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
            status: "400"
        });
    }
}