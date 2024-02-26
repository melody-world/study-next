// const mongoose = require("mongoose");

import dbConnect from "@/app/utils/dbCounnect";

export async function GET(req: Request) {
  try {
    await dbConnect();
  } catch (error) {
    return Response.error();
  }
}
