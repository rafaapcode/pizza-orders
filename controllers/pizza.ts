import { Request, Response } from "express";
import PrismaDatabase from "../database/prisma";
import Validations from "./validations/validation";

export async function createPizza(req: Request, res: Response) {
  try {
    const validation = Validations.pizza.safeParse(req.body);
    if (!validation.success) {
      return res
        .status(400)
        .json({ message: validation.error.issues[0].message });
    }
    await PrismaDatabase.createPizza(req.body);
    return res.json({ message: "Pizza created." });
  } catch (err: any) {
    console.log(err);
    if (err.code === "P2002") {
      return res.status(400).json({ message: "This pizza is already exists." });
    }
  }
}

export async function getAll(req: Request, res: Response) {
  const allPizzas = await PrismaDatabase.getAllPizza();
  return res.json(allPizzas);
}

export async function deletePizza(req: Request, res: Response) {
  try {
    const params = req.params;
    await PrismaDatabase.deletePizza(Number(params.id));
    return res.json({ message: "Pizza deleted with success." });
  } catch (err: any) {
    if (err.code === "P2025") {
      return res.status(404).json({ message: "Pizza not found." });
    }
    return res.status(404).json({ message: "Pizza not found." });
  }
}
