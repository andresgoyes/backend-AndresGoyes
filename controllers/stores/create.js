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
        next(error);
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
        next(error);
    }
};

export { create, createMany };