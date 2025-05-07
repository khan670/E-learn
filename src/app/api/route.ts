import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoDb";
import { User } from "@/models/User";

export async function GET() {
  await dbConnect();
  const users = await User.findOne({ email: "rayankahn@gmail.com" });
  return NextResponse.json({ name: "Rayan", users });
}
