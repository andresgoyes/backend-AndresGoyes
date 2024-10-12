import { Router } from "express";
import { allUser,userByRole } from "../controllers/users/read.js"

const router = Router()

router.get('/all', allUser)
router.get('/role/:x', userByRole)

    
export default router