import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/dbAdmin";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, description, status } = body;

    if (!name || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin.from("projects").insert({
      name,
      description,
      status: status ?? "active",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, project: data?.[0] });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
