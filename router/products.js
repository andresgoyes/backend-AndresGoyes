import { Router } from "express";
import { allProducts, productByName, productByType, productsByPrice } from "../controllers/products/read.js";
import { create, createMany } from "../controllers/products/create.js"

const router = Router();

router.get('/all', allProducts); 
router.get('/name/:name', productByName); 
router.get('/type/:type', productByType); 
router.get('/price/:price', productsByPrice); 
router.post('/create/', create)
router.post('/createmany/', createMany)

export default router;