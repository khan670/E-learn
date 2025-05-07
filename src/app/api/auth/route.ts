import { User } from "@/models/User";

export const POST = async (reqest: Request) => {
  const data = await reqest.json();
  const sendingData = await User.create(data);
  return Response.json({
    status: 200,
    message: "Request Sent Successfully",
    sendingData,
  });
};

export const GET = async (reqest: Request) => {
  // const data = await reqest.json();
  return Response.json({ message: "Request Sent Successfully" });
};
