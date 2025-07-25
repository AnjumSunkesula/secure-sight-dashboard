import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
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
