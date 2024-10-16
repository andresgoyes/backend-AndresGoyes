import Product from "../../models/Product.js";

let create = async (req, res) => {
    try {
        let product = req.body;
        let newProduct = await Product.create(product);
        return res.status(201).json({
            response: newProduct,
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
        let products = req.body;
        let newProducts = await Product.insertMany(products);
        return res.status(201).json({
            response: newProducts,
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