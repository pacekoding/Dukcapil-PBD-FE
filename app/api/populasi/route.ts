import { NextResponse } from "next/server";
import { populasiData } from "@/lib/data/populasi";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const wilayah = searchParams.get("wilayah") || "provinsi";

  const data = populasiData[wilayah] || [];
  return NextResponse.json(data);
}
