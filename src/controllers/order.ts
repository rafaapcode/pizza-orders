import { Request, Response } from "express";
import PrismaDatabase from "../database/prisma";

export async function createOrder(req: Request, res: Response) {
  try {
    await PrismaDatabase.createOrder(req.body);
    return res.json({ message: "Order send with success." });
  } catch (err: any) {
    console.log(err);
  }
}

export async function getAllOrders(req: Request, res: Response) {
  const allPizzas = await PrismaDatabase.getAllOrder();
  return res.json(allPizzas);
}

export async function getOneOrder(req: Request, res: Response) {
  const params = req.params;
  const order = await PrismaDatabase.getOneOrder(Number(params.id));
  return res.json({
    ...order[0].pizza,
    ingredients: JSON.parse(order[0].pizza.ingredients),
    quantity: order[0].quantity,
  });
}
