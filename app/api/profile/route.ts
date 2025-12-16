import { NextResponse } from "next/server";
import { profilDinas } from "@/lib/data";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug || slug === "provinsi") {
    return NextResponse.json(profilDinas.provinsi);
  }

  const data = profilDinas.wilayah.find((d) => d.slug === slug);
  if (!data) {
    return NextResponse.json({ error: "Wilayah tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json(data);
}
