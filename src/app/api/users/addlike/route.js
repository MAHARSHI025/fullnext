import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Liker from "@/models/Likemodel";

connect();

export async function POST(req) {

    try {

        const {  userName } = await req.json();
        
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
        let userliked = decodedtoken.username
        let tempuser = await User.findOne({username:userName})
        let userId = tempuser._id

        const alreadylike = await Liker.findOne({ userName: userName })
        if (alreadylike) {

            let namer = await Liker.find({ userliked: userliked })
            // console.log(namer.length);

            if (namer.length >= 1) {
                return NextResponse.json({
                    namer,
                    message: "User already like thought",
                    success: false
                });

            }

            let likearray = await Liker.findOneAndUpdate({ userName: userName }, { $push: { userliked: userliked } })
            // let insider = likearray.userliked

            let likecount = await User.findOneAndUpdate({ username: userName }, { $inc: { likecount: 1 } }, { new: true })

            return NextResponse.json({
                // likearray,
                likecount,
                message: "User like thought",
                success: true
            });
        }

        // Create a new like
        const newLike = await Liker.create({ userName, userliked: userliked });

        await User.findByIdAndUpdate(userId, { $push: { likes: newLike._id } });

        let likecount = await User.findOneAndUpdate({ username: userName }, { $inc: { likecount: 1 } }, { new: true })

        // Fetch the updated user data
        const updatedUser = await User.findById(userId).populate("likes");

        return NextResponse.json({
            user: updatedUser,
            message: "Like added successfully",
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
