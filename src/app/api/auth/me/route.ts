import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export const GET = async (request: Request) => {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token");
  if (!tokenCookie) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  const token = tokenCookie.value;
  const payload = jwt.verify(token, process.env.JWT_SECRET!);
  return NextResponse.json({ user: payload });
};
