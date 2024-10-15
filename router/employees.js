import { Router } from "express";
import { allEmployees, employeeByName, employeeByPosition, employeeBySalary } from "../controllers/employees/read.js";

const router = Router();

router.get('/all', allEmployees); 
router.get('/name/:name', employeeByName); 
router.get('/position/:position', employeeByPosition);
router.get('/salary/:salary', employeeBySalary); 

export default router;