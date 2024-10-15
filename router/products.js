import { Router } from "express";
import { allProducts, productByName, productByType, productsByPrice } from "../controllers/products/read.js";

const router = Router();

router.get('/all', allProducts); // Ver todos los productos
router.get('/name/:name', productByName); // Ver un producto por nombre
router.get('/type/:type', productByType); // Ver productos por tipo
router.get('/price/:price', productsByPrice); // Ver productos por precio

export default router;