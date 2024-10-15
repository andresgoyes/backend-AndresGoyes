import Employee from "../../models/Employee.js";

// Ver todos los empleados
let allEmployees = async (req, res) => {
    try {
        let all = await Employee.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};


// Ver empleado según su nombre
let employeeByName = async (req, res) => {
    try {
        let nameQuery = req.params.name;
        
        let all = await Employee.find({ name: { $regex: nameQuery, $options: 'i' } }); // Búsqueda insensible a mayúsculas
        
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

// Ver empleados según su cargo (posición)
let employeeByPosition = async (req, res) => {
    try {
        console.log(req.params);
        let positionQuery = req.params.position;
        
        let all = await Employee.find({ position: positionQuery });
        
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

// Ver empleados según su salario (mayor o igual al valor dado)
let employeeBySalary = async (req, res) => {
    try {
        let salaryQuery = req.params.salary;
        
        let all = await Employee.find({ salary: { $gte: salaryQuery } });
        
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export { allEmployees, employeeByName, employeeByPosition, employeeBySalary  };