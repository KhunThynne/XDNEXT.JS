import type { Payload } from "payload";

export const seedCartItems = async (payload: Payload) => {
  try {
    const existing = await payload.find({ collection: "cart-items", limit: 100 });
    if (existing.docs.length >= 100) {
      payload.logger.info("CartItems already seeded.");
      return;
    }

    const users = await payload.find({ collection: "users", limit: 1 });
    if (!users.docs.length) {
      payload.logger.info("No users found to seed CartItems.");
      return;
    }
    const user = users.docs[0];

    const products = await payload.find({ collection: "products", limit: 50 });
    if (!products.docs.length) {
      payload.logger.info("No products found to seed CartItems.");
      return;
    }

    const carts = await payload.find({ 
      collection: "carts", 
      where: { user: { equals: user.id } }, 
      limit: 1 
    });
    
    let cartId;
    if (!carts.docs.length) {
      const newCart = await payload.create({
        collection: "carts",
        data: {
          user: user.id,
          status: "ACTIVE",
        }
      });
      cartId = newCart.id;
    } else {
      cartId = carts.docs[0].id;
    }

    payload.logger.info("Seeding 100 CartItems...");
    for (let i = 0; i < 100; i++) {
      const randomProduct = products.docs[Math.floor(Math.random() * products.docs.length)];
      await payload.create({
        collection: "cart-items",
        data: {
          cart: cartId,
          product: randomProduct.id,
          quantity: Math.floor(Math.random() * 5) + 1,
        }
      });
    }
    payload.logger.info("Successfully Seeded 100 CartItems");
  } catch (err) {
    payload.logger.error(`Seed CartItems Failed: ${err}`);
  }
};
