import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(req, { params }) {
  const id = parseInt(params.id);

  const updated = await prisma.incident.update({
    where: { id },
    data: { resolved: true },
  });

  return Response.json(updated);
}
