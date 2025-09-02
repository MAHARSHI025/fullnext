import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

connect();

export async function POST(req) {
    try {
        const reqbody = await req.json();
        const { thought, color, typer } = reqbody;

        if (!thought) {
            return NextResponse.json({ error: "input is not given", Status: 400 });
        }

        const cookieStore = cookies();
        const tokenCookie = cookieStore.get("token");

        if (!tokenCookie) {
            return NextResponse.json({ error: "cookie not found", Status: 400 });
        }

        const userdetail = jwt.verify(tokenCookie.value, process.env.TOKENSECRET);

        // make sure the JWT has the correct user id
        const userId = userdetail.id || userdetail._id;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { thought: thought } },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found", Status: 404 });
        }

        return NextResponse.json({ message: "Thought added successfully", Status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message, Status: 400 });
    }
}
