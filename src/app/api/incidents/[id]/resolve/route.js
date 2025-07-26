import { PrismaClient } from "@prisma/client";


export async function PATCH(req, { params }) {
  const prisma = new PrismaClient();

  const id = parseInt(params.id);

  const updated = await prisma.incident.update({
    where: { id },
    data: { resolved: true },
  });

  return Response.json(updated);
}