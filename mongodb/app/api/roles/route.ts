import { ObjectId } from "mongodb";
import Roles from "../../models/roles";
import dbConnect from "@/app/utils/dbConnect";

const mongoose = require("mongoose");

export async function GET(req: Request) {
  try {
    await dbConnect();

    return Response.json({
      message: "OK",
    });
  } catch (error) {
    return Response.error();
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();

    // const role = new Roles({
    //   _id: new mongoose.Types.ObjectId(),
    //   roleName: "관리자",
    // });

    // await role.save();

    // await Roles.bulkWrite([
    //   {
    //     insertOne: {
    //       document: {
    //         _id: new mongoose.Types.ObjectId(),
    //         roleName: "중간관리자",
    //       },
    //     },
    //   },
    //   {
    //     insertOne: {
    //       document: {
    //         _id: new mongoose.Types.ObjectId(),
    //         roleName: "사용자",
    //       },
    //     },
    //   },
    // ]);

    // await Roles.updateOne(
    //   { _id: new ObjectId(`65dc8d3b3832911cb8056337`) },
    //   {
    //     $set: { roleName: "일반사용자" },
    //   }
    // );

    // await Roles.updateOne(
    //   {
    //     _id: new mongoose.Types.ObjectId(),
    //   },
    //   {
    //     $set: {
    //       roleName: "테스터",
    //     },
    //   },
    //   {
    //     upsert: true,
    //   }
    // );

    // await Roles.deleteOne({
    //   _id: new ObjectId(`65dc90043832911cb805633a`),
    // });

    // const roleList = await Roles.find(
    //   {},
    //   {
    //     _id: 0,
    //     roleName: 1,
    //   }
    // )
    //   .lean()
    //   .sort({ roleName: 1 });

    return Response.json({
      message: "OK",
      // result: roleList,
    });
  } catch (error) {
    return Response.error();
  }
}
