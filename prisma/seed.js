const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Create Cameras
  const cameraA = await prisma.camera.create({
    data: {
      name: 'Shop Floor A',
      location: 'First Floor - South Wing',
    },
  });

  const cameraB = await prisma.camera.create({
    data: {
      name: 'Vault',
      location: 'Basement - Vault Room',
    },
  });

  const cameraC = await prisma.camera.create({
    data: {
      name: 'Entrance',
      location: 'Main Gate',
    },
  });

  const types = ['Unauthorized Access', 'Gun Threat', 'Face Recognized'];
  const now = new Date();

  // 2. Create Incidents
  for (let i = 0; i < 12; i++) {
    const start = new Date(now.getTime() - i * 60 * 60 * 1000); // each incident an hour apart
    const end = new Date(start.getTime() + (5 + Math.floor(Math.random() * 20)) * 1000); // 5–25 sec duration
    const camera = [cameraA, cameraB, cameraC][i % 3];

    await prisma.incident.create({
      data: {
        type: types[i % types.length],
        tsStart: start,
        tsEnd: end,
        thumbnailUrl: `/thumbnails/thumb-${i + 1}.png`,
        videoUrl: `/videos/incident-${i + 1}.mp4`,
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
