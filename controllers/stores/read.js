import Store from "../../models/Store.js";

let allStores = async (req, res, next) => {
    try {
        let stores = await Store.find();
        return res.status(200).json({
            response: stores
        });
    } catch (error) {
        next(error);
    }
};

let storeByAddress = async (req, res, next) => {
    try {
        let addressQuery = req.params.address;
        let store = await Store.findOne({ address: addressQuery });
        if (store) {
            return res.status(200).json({
                response: store
            });
        } else {
            return res.status(404).json({
                response: "Store not found"
            });
        }
    } catch (error) {
        next(error);
    }
};

let storeByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name;
        let store = await Store.findOne({ name: nameQuery });
        if (store) {
            return res.status(200).json({
                response: store
            });
        } else {
            return res.status(404).json({
                response: "Store not found"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allStores, storeByAddress, storeByName };