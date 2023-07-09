import dbConnect, { isDBConnected } from "@/lib/dbConnect";
import { count } from "console";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const v = getQSParamFromURL("app_variant", req.url);
    const c = getQSParamFromURL("count", req.url);
    const updated = await increment(v || "", c || "");
    return NextResponse.json(updated);
}

function getQSParamFromURL(
  key: string,
  url: string | undefined
): string | null {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}

async function increment(app_variant: string, count_type: string) {
    const db = await _initdb();
    if (!db) {
        return {count: 0}
    }
    const collection = db.collection(count_type);
    const result = await collection.insertOne({ app_variant: app_variant, timestamp: new Date() });
    const count = await collection.countDocuments({ app_variant: app_variant });
    return { count: count };
}

async function _initdb() {
    const connection = await dbConnect();
  if (connection) {
    const { db } = connection;

    if (isDBConnected()) {
      return db;
    }
  }
}