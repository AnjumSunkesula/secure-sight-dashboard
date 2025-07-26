import { PrismaClient } from "@prisma/client";


export async function GET(req) {
  const prisma = new PrismaClient();

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
}