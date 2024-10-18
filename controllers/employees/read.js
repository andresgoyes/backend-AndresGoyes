import Employee from "../../models/Employee.js";

let allEmployees = async (req, res, next) => {
    try {
        let all = await Employee.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
};

let employeeByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name;
        let name = await Employee.find({ name: { $regex: nameQuery, $options: 'i' } });

        if (name.length > 0) {
            return res.status(200).json({
                response: name
            });
        } else {
            return res.status(404).json({
                response: "No employees found with the specified name"
            });
        }
    } catch (error) {
        next(error);
    }
};

let employeeByPosition = async (req, res, next) => {
    try {
        let positionQuery = req.params.position;
        let position = await Employee.find({ position: { $regex: positionQuery, $options: 'i' } });

        if (position.length > 0) {
            return res.status(200).json({
                response: position
            });
        } else {
            return res.status(404).json({
                response: "No employees found with the specified position"
            });
        }
    } catch (error) {
        next(error);
    }
};

let employeeBySalary = async (req, res, next) => {
    try {
        let salaryQuery = req.params.salary;
        let salary = await Employee.find({ salary: salaryQuery });

        if (salary.length > 0) {
            return res.status(200).json({
                response: salary
            });
        } else {
            return res.status(404).json({
                response: "No employees found with the specified salary"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allEmployees, employeeByName, employeeByPosition, employeeBySalary };