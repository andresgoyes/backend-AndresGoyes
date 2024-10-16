import User from "../../models/User.js";

let create = async (req, res) => {
    try {
        let user = req.body;
        let newUser = await User.create(user);
        return res.status(201).json({
            response: newUser,
            message: "Usuario creado exitosamente."
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message,
            message: "Error al crear el usuario."
        });
    }
};

let createMany = async (req, res) => {
    try {
        let users = req.body;
        let allUsers = await User.insertMany(users);
        return res.status(201).json({
            response: allUsers,
            message: "Usuarios creados exitosamente."
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message,
            message: "Error al crear los usuarios."
        });
    }
};

export { create, createMany };