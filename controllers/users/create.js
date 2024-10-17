import User from "../../models/User.js";

let create = async (req, res,next) => {
    try {
        let user = req.body;
        let newUser = await User.create(user);
        return res.status(201).json({
            response: newUser,
            message: "Usuario creado exitosamente."
        });
    } catch (error) {
        next(error)
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
        next(error)
    }
};

export { create, createMany };