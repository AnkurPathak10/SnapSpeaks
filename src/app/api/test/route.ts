import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Snapspeaks"); // use your DB name here
    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      status: "success",
      collections: collections.map(c => c.name),
    });
  } catch (e) {
    console.error("MongoDB connection error:", e);
    const message = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ status: "error", message });
  }
}