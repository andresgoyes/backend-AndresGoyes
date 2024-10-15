import { Router } from "express";
import storesRouter from './stores.js'; 
import productsRouter from './products.js'; 
import employeesRouter from './employees.js'; 

const router = Router();

router.use('/stores', storesRouter); 
router.use('/products', productsRouter);
router.use('/employees', employeesRouter); 

export default router;