import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, date, message } = body;

    if (!name || !email || !phone || !date) {
      return NextResponse.json(
        { status: "error", message: "Missing fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("snapspeaks");
    const collection = db.collection("calls");

    await collection.insertOne({
      name,
      email,
      phone,
      date,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ status: "success" });
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    console.error("Error inserting call:", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
