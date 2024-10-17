import Product from "../../models/Product.js";

let create = async (req, res, next) => {
    try {
        let product = req.body;
        let newProduct = await Product.create(product);
        return res.status(201).json({
            response: newProduct,
            message: "Product creado exitosamente."
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let products = req.body;
        let newProducts = await Product.insertMany(products);
        return res.status(201).json({
            response: newProducts,
            message: "Products creados exitosamente."
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };