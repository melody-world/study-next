import Users from "../../models/users";
import dbConnect from "@/app/utils/dbConnect";
const mongoose = require("mongoose");

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

    // const user = new Users({
    //   _id: new mongoose.Types.ObjectId(),
    //   userName: "에디",
    //   roleCode: "65dc8ac91d2f7413e3bb37bf",
    // });

    // await user.save();

    const user = await Users.aggregate([
      {
        $match: {
          userName: "에디",
        },
      },
      {
        $addFields: { roleCode: { $toObjectId: "$roleCode" } },
      },
      {
        $lookup: {
          from: "roles",
          localField: "roleCode",
          foreignField: "_id",
          as: "roles",
        },
      },
      { $unwind: "$roles" },
      {
        $project: {
          _id: 0,
          userName: 1,
          roleName: "$roles.roleName",
        },
      },
    ]);

    return Response.json({
      message: "OK",
      result: user,
    });
  } catch (error) {
    return Response.error();
  }
}
