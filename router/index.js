import { Router } from "express";
import storesRouter from './stores.js'; // Importa el enrutador de tiendas
import productsRouter from './products.js'; // Importa el enrutador de productos
import employeesRouter from './employees.js'; // Importa el enrutador de empleados

const router = Router();

router.use('/stores', storesRouter); // Rutas para tiendas
router.use('/products', productsRouter); // Rutas para productos
router.use('/employees', employeesRouter); // Rutas para empleados

export default router;