const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Create Cameras
  const cameraA = await prisma.camera.create({
    data: {
      name: 'Shop Floor A',
      location: 'First Floor - Living Room',
    },
  });

  const cameraB = await prisma.camera.create({
    data: {
      name: 'Vault',
      location: 'Alleyway',
    },
  });

  const cameraC = await prisma.camera.create({
    data: {
      name: 'Entrance',
      location: 'Sururbs',
    },
  });

  const types = ['Unauthorized Access', 'Suspicious Activity', 'Forced Entry', 'Package Left', 'Robbery', 'Scam', 'Gun Threat'];
  const now = new Date();

  await prisma.incident.deleteMany();

  // 2. Create Incidents
  for (let i = 0; i < 15; i++) {
    const start = new Date(now.getTime() - i * 60 * 60 * 1000); // each incident an hour apart
    const end = new Date(start.getTime() + (5 + Math.floor(Math.random() * 20)) * 1000); // 5–25 sec duration
    const camera = [cameraA, cameraB, cameraC][i % 3];

    await prisma.incident.create({
      data: {
        type: types[i % types.length],
        tsStart: start,
        tsEnd: end,
        thumbnailUrl: `/thumbnails/thumb-${(i % 7) + 1}.png`,
        videoUrl: `/videos/incident-${(i % 7) + 1 }.mp4`,
        resolved: false,
        camera: {
          connect: { id: camera.id },
        },
      },
    });
  }
}

main()
  .then(() => {
    console.log('✅ Seeded successfully');
  })
  .catch((e) => {
    console.error('❌ Seed error', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
