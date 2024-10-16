import Employee from "../../models/Employee.js";

let create = async (req, res) => {
    try {
        let employee = req.body;
        let newEmployee = await Employee.create(employee);
        return res.status(201).json({
            response: newEmployee,
            message: "Empleado creado exitosamente."
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message,
            message: "Error al crear el empleado."
        });
    }
};

let createMany = async (req, res) => {
    try {
        let employees = req.body;
        let allEmployees = await Employee.insertMany(employees);
        return res.status(201).json({
            response: allEmployees,
            message: "Employees creados exitosamente."
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message,
            message: "Error al crear los Employees."
        });
    }
};

export { create, createMany };