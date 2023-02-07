import { Router } from "express";
import {createPizza, getAll, deletePizza} from '../controllers/pizza';
import {createOrder, getAllOrders, getOneOrder} from '../controllers/order';

const router = Router();

router.post('/pizzas', createPizza);
router.get('/pizzas', getAll);
router.delete('/pizzas/:id', deletePizza);
router.post('/orders', createOrder);
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOneOrder);

export default router;