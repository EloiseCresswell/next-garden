import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// this function gets ALL months, not specific... guess could make specific or dynamic API routing nextjs
export async function GET() {
  try {
    const client = await clientPromise;
    if (client) {
    const db = client.db("plan");
    const months = await db
      .collection("month")
      .find({})
      .toArray();
    const serialized = months.map((m) => ({
      ...m,
      _id: m._id.toString(),
    }));
    console.log('months', months)
    return NextResponse.json(serialized)};
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
