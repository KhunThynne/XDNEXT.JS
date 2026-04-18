import type { Payload } from "payload";

export const seedOrderItems = async (payload: Payload) => {
  try {
    // We already have some seed logic for orderItems from userItems, so we just want to ensure we have an order with 100 items.
    const users = await payload.find({ collection: "users", limit: 1 });
    if (!users.docs.length) {
      payload.logger.info("No users found to seed OrderItems.");
      return;
    }
    
    const products = await payload.find({ collection: "products", limit: 50 });
    if (!products.docs.length) {
      payload.logger.info("No products found to seed OrderItems.");
      return;
    }

    // Create an order to group these item seeds
    const newOrder = await payload.create({
      collection: "orders",
      data: {
        user: users.docs[0].id,
        status: "PENDING",
      }
    });

    payload.logger.info("Seeding 100 OrderItems...");
    for (let i = 0; i < 100; i++) {
      const randomProduct = products.docs[Math.floor(Math.random() * products.docs.length)];
      await payload.create({
        collection: "order-items",
        data: {
          order: newOrder.id,
          product: randomProduct.id,
          unitPrice: Math.floor(Math.random() * 1000) + 100,
        }
      });
    }
    payload.logger.info("Successfully Seeded 100 OrderItems into Order " + newOrder.id);

  } catch (err) {
    payload.logger.error(`Seed OrderItems Failed: ${err}`);
  }
};
