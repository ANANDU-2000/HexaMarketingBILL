import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "content", "en", "features-detail.json");

async function readFeatures() {
  const raw = await fs.readFile(dataPath, "utf8");
  return JSON.parse(raw);
}

async function writeFeatures(data: unknown) {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2), "utf8");
}

export async function GET() {
  try {
    const data = await readFeatures();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Failed to read feature details", err);
    return NextResponse.json({ error: "Failed to read feature details" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const adminToken = process.env.FEATURES_ADMIN_TOKEN;
  const headerToken = request.headers.get("x-features-admin-token");

  if (!adminToken || headerToken !== adminToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { slug, update } = body as { slug?: string; update?: Record<string, unknown> };
    if (!slug || !update) {
      return NextResponse.json({ error: "Missing slug or update payload" }, { status: 400 });
    }

    const data = await readFeatures();
    if (!data[slug]) {
      return NextResponse.json({ error: "Unknown feature slug" }, { status: 404 });
    }

    data[slug] = { ...data[slug], ...update };
    await writeFeatures(data);

    return NextResponse.json({ success: true, feature: data[slug] });
  } catch (err) {
    console.error("Failed to update feature details", err);
    return NextResponse.json({ error: "Failed to update feature details" }, { status: 500 });
  }
}

