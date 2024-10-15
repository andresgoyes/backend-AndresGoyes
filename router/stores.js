import { Router } from "express";
import { allStores, storeByAddress, storeByName } from "../controllers/stores/read.js";

const router = Router();

router.get('/all', allStores);
router.get('/address/:address', storeByAddress);
router.get('/name/:name', storeByName);

export default router;
