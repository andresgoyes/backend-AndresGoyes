import { Router } from "express";
import { allProducts, productByName, productByType, productsByPrice } from "../controllers/products/read.js";

const router = Router();

router.get('/all', allProducts); 
router.get('/name/:name', productByName); 
router.get('/type/:type', productByType); 
router.get('/price/:price', productsByPrice); 

export default router;