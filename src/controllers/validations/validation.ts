import { z } from "zod";

const Pizza = z.object({
  name: z
    .string()
    .min(5, { message: "The Pizza's name must be at least 5 characters." }),
  price: z
    .number()
    .positive({ message: "The price of the Pizza must be positive." }),
  ingredients: z.array(
    z
      .string()
      .min(3, {
        message: "The ingredients of the Pizza must be at least 3 characters",
      })
  ),
});

const Order = z.object({
  name: z
    .string()
    .min(5, { message: "The Pizza's name must be at least 5 characters." }),
  quantity: z
    .number()
    .positive({ message: "The quantity of the Pizza must be positive." }),
});

export default {pizza: Pizza, order: Order};