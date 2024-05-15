import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Liker from "@/models/Likemodel";

connect()

export async function POST(NextRequest) {

    try {
        const reqbody = await NextRequest.json()
        const { username } = reqbody
        console.log(username);

        // const user = await User.findOneAndUpdate({ username }, { $inc: { likecount: 1 } }, { new: true })
        const user = await User.findOne({ username: username })

        if (!user) {
            console.log("User not found");
            return NextResponse.json({
                error: "user not found",
                Status: "400"
            })
        }

        const liked = await Liker.findOne({ userName: username })

        if (liked) {
            const liken = await Liker.findOneAndUpdate({ userName: username }, { $inc: { likecount: 1 } }, { new: true })

            return NextResponse.json({
                liken,
                error: "User liken +1",
                Status: 400,
            })
        }

        const newLiker = new Liker({
            user: user._id,
            userName: username,
            likecount: 1,
        })

        const savedLiker = await newLiker.save();
        
        return NextResponse.json({
            user,
            savedLiker,
            message: "user found",
            Status: "200"
        });


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
            Status: "400"
        })
    }
}