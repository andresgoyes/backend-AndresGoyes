import Product from "../../models/Product.js";

let allProducts = async (req, res, next) => {
    try {
        let products = await Product.find();
        return res.status(200).json({
            response: products
        });
    } catch (error) {
        next(error);
    }
};

let productByName = async (req, res, next) => {
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
        next(error);
    }
};

let productByType = async (req, res, next) => {
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
        next(error);
    }
};

let productsByPrice = async (req, res, next) => {
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
        next(error);
    }
};

let productByID = async (req, res, next) => {
    try {
        let idQuery = req.params._id;
        let product = await Product.findById(idQuery);

        if (product) {            
            return res.status(200).json({                
                response: product
            });
        } else {            
            return res.status(404).json({                
                response: "No product found with the specified ID"
            });
        }
    } catch (error) {        
        next();
    }
};

export { allProducts, productByName, productByType, productsByPrice, productByID };