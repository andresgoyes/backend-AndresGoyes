import { Router } from "express";
import { allEmployees, employeeByName, employeeByPosition, employeeBySalary } from "../controllers/employees/read.js";

const router = Router();

router.get('/all', allEmployees); // Ver todos los empleados
router.get('/name/:name', employeeByName); // Ver todos los empleados
router.get('/position/:position', employeeByPosition); // Ver empleados por cargo/posición
router.get('/salary/:salary', employeeBySalary); // Ver empleados con salario mayor o igual al valor dado

export default router;