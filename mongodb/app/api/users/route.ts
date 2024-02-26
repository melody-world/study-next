import Users from "../../models/users";

import dbConnect from "@/app/utils/dbConnect";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const userList = await Users.find().lean();

    return Response.json({
      message: "OK",
      result: userList,
    });
  } catch (error) {
    return Response.error();
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();

    await Users.insertOne({
      userName: "22",
      roleCode: "123",
    });

    return Response.json({
      message: "OK",
    });
  } catch (error) {
    return Response.error();
  }
}
