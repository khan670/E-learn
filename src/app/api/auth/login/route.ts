import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { email, password } = request.json();
  if (!email || !password)
    return NextResponse.json({
      status: 400,
      message: "Please enter the valid email and password",
    });
  const checkUser = await User.findOne({ email });
  if (!checkUser)
    return NextResponse.json({
      message: "Email Does not Contains in the Database",
    });
  const checkPassword = await bcrypt.compare(password, checkUser.password);
  if (!checkPassword)
    return NextResponse.json({ message: "Please Enter Valid Password" });
  const token = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return NextResponse.json({ message: "login Successfully", token });
};
