import 'dotenv/config';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);

  await prisma.admin.upsert({
    where: { email: 'admin@bolos.com' },
    update: {},
    create: { email: 'admin@bolos.com', passwordHash },
  });

  console.log('Seed concluído. Admin: admin@bolos.com / admin123');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
