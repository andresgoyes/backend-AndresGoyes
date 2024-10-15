import Product from "../../models/Product.js";

let allProducts = async (req, res) => {
    try {
        let products = await Product.find();
        return res.status(200).json({
            response: products
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

let productByName = async (req, res) => {
    try {
        let nameQuery = req.params.name;
        let product = await Product.findOne({ name: nameQuery });
        if (product) {
            return res.status(200).json({
                response: product
            });
        } else {
            return res.status(404).json({
                response: "Product not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

let productByType = async (req, res) => {
    try {
        let typeQuery = req.params.type;
        let products = await Product.find({ type: typeQuery });
        if (products.length > 0) {
            return res.status(200).json({
                response: products
            });
        } else {
            return res.status(404).json({
                response: "No products found for the specified type"
            });
        }
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

let productsByPrice = async (req, res) => {
    try {
        let priceQuery = req.params.price;
        let products = await Product.find({ price: { $lte: priceQuery } });
        if (products.length > 0) {
            return res.status(200).json({
                response: products
            });
        } else {
            return res.status(404).json({
                response: "No products found with price equal to or less than the specified value"
            });
        }
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export { allProducts, productByName, productByType, productsByPrice };