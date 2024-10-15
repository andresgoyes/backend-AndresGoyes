import Store from "../../models/Store.js";

let allStores = async (req, res) => {
    try {
        let stores = await Store.find();
        return res.status(200).json({
            response: stores
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

let storeByAddress = async (req, res) => {
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
        return res.status(500).json({
            response: error.message
        });
    }
};

let storeByName = async (req, res) => {
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
        return res.status(500).json({
            response: error.message
        });
    }
};

export { allStores, storeByAddress, storeByName };