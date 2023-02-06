import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class PrismaDatabase {
  static async createPizza(body: any) {
    const ingredient = JSON.stringify(body.ingredients);
    return await prisma.pizza.create({
      data: {
        name: body.name.toLowerCase(),
        price: body.price,
        ingredients: ingredient,
      },
    });
  }

  static async deletePizza(id: number) {
    await prisma.pizza.delete({
      where: { id },
    });
  }

  static async getAllPizza() {
    return await prisma.pizza.findMany({});
  }

  static async createOrder(body: any) {
    const order = JSON.stringify(body.ingredients);
    return await prisma.order.create({
      data: {
        quantity: body.quantity,
        pizzaname: body.name.toLowerCase(),
      },
    });
  }

  static async getOneOrder(id: number) {
    return await prisma.order.findMany({
      where: { id: id },
      select: {
        pizza: {
          select: {
            name: true,
            price: true,
            ingredients: true,
          },
        },
        quantity: true,
      },
    });
  }

  static async getAllOrder() {
    return await prisma.order.findMany({
      select: {
        id: true,
        pizzaname: true,
        quantity: true,
      },
    });
  }
}
