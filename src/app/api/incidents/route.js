import { PrismaClient } from "@prisma/client";


export async function GET(req) {
  const prisma = new PrismaClient();

  try {
    const { searchParams } = new URL(req.url);
    const resolved = searchParams.get("resolved") === "true";

    const incidents = await prisma.incident.findMany({
      where: { resolved },
      orderBy: { tsStart: "desc" },
      include: {
        camera: true,
      },
    });

    return Response.json(incidents);
  } catch (error) {
    console.error("GET /api/incidents error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}