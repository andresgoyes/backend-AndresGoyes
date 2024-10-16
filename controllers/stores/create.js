import Store from "../../models/Store.js";

let create = async (req, res) => {
    try {
        let store = req.body;
        let newStore = await Store.create(store);
        return res.status(201).json({
            response: newStore,
            message: "Product creado exitosamente."
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message,
            message: "Error al crear el product."
        });
    }
};

let createMany = async (req, res) => {
    try {
        let stores = req.body;
        let newStores = await Store.insertMany(stores);
        return res.status(201).json({
            response: newStores,
            message: "Products creados exitosamente."
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message,
            message: "Error al crear los Products."
        });
    }
};

export { create, createMany };