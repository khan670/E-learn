import dbConnect from "@/lib/mongoDb";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export const POST = async (request: Request) => {
  try {
    const { name, email, password } = await request.json();
    await dbConnect();
    const existing = await User.findOne({ email });

    if (existing)
      return NextResponse.json(
        { status: 400, message: "Already User Available with this Email" },
        { status: 400 }
      );
    const encryptedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const token = jwt.sign(
      {
        _id: createdUser._id,
        email: createdUser.email,
        name: createdUser.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const response = NextResponse.json(
      {
        status: 200,
        message: "User Created Successfully",
        createdUser,
        token,
      },
      { status: 200 }
    );
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // ← 7 days in seconds
    });
    return response;
  } catch {
    return NextResponse.json({
      status: 400,
      message: "There is some error while adding the data in the database",
    });
  }
};
