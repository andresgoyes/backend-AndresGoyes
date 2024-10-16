import { Router } from "express";
import { allStores, storeByAddress, storeByName } from "../controllers/stores/read.js";
import { create, createMany } from "../controllers/stores/create.js"

const router = Router();

router.get('/all', allStores);
router.get('/address/:address', storeByAddress);
router.get('/name/:name', storeByName);
router.post('/create/', create)
router.post('/createmany/', createMany)

export default router;
