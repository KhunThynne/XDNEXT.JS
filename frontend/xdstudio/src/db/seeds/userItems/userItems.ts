import type { Payload } from "payload";

export const seedUserItems = async (payload: Payload) => {
  try {
    const users = await payload.find({
      collection: "users",
      limit: 10,
    });

    if (!users.docs.length) {
      payload.logger.info("No users found to seed UserItems.");
      return;
    }

    const products = await payload.find({
      collection: "products",
      limit: 50,
    });

    if (!products.docs.length) {
      payload.logger.info("No products found to create dummy UserItems.");
      return;
    }

    // Check existing UserItems
    const existing = await payload.find({
      collection: "user-items",
      limit: 1,
    });

    if (existing.docs.length >= 100) {
      payload.logger.info("UserItems already seeded.");
      return;
    }

    payload.logger.info("Seeding 100 UserItems...");

    for (let i = 0; i < 100; i++) {
      // Pick random user
      const randomUser = users.docs[Math.floor(Math.random() * users.docs.length)];
      // Pick random product
      const randomProduct = products.docs[Math.floor(Math.random() * products.docs.length)];

      // Create a dummy order-item for this user-item
      const newOrderItem = await payload.create({
        collection: "order-items",
        data: {
          product: randomProduct.id,
          unitPrice: Math.floor(Math.random() * 1000) + 100, // Random price between 100-1100
        },
      });

      // Create the user-item
      await payload.create({
        collection: "user-items",
        data: {
          user: randomUser.id,
          item: newOrderItem.id,
          config: {
            seeded: true,
            version: "1.0",
            serialNumber: `SN-${Math.random().toString(36).substring(7).toUpperCase()}`,
            activationDate: new Date().toISOString(),
          },
        },
      });
    }

    payload.logger.info(`Successfully Seeded 100 UserItems`);
  } catch (error) {
    payload.logger.error(`Seed UserItems Failed : ${error}`);
  }
};
