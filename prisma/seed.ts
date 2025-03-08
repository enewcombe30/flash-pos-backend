import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.item.createMany({
    data: [
      { name: "Espresso", price: 2.99, stock: 50 },
      { name: "Cappuccino", price: 3.99, stock: 40 },
      { name: "Latte", price: 4.5, stock: 30 },
    ],
  });

  console.log("✅ Sample data inserted!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
