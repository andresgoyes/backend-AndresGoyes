import "dotenv/config.js";
import '../../config/database.js';
import Product from '../Product.js';

let products = [
    { name: "Laptop Gamer", brand: "Dell", type: "Electronics", price: 1200 },
    { name: "Smartphone", brand: "Apple", type: "Electronics", price: 999 },
    { name: "Tablet", brand: "Samsung", type: "Electronics", price: 650 },
    { name: "Headphones", brand: "Sony", type: "Accessories", price: 150 },
    { name: "Smartwatch", brand: "Garmin", type: "Accessories", price: 200 },
    { name: "Blender", brand: "Oster", type: "Appliances", price: 80 },
    { name: "Vacuum Cleaner", brand: "Dyson", type: "Appliances", price: 500 },
    { name: "Electric Kettle", brand: "Philips", type: "Appliances", price: 45 },
    { name: "Microwave", brand: "LG", type: "Appliances", price: 100 },
    { name: "Refrigerator", brand: "Whirlpool", type: "Appliances", price: 1200 },
    { name: "Gaming Mouse", brand: "Logitech", type: "Accessories", price: 60 },
    { name: "Keyboard", brand: "Razer", type: "Accessories", price: 100 },
    { name: "Monitor", brand: "Acer", type: "Electronics", price: 300 },
    { name: "Printer", brand: "HP", type: "Electronics", price: 200 },
    { name: "Office Chair", brand: "Herman Miller", type: "Furniture", price: 600 },
    { name: "Desk Lamp", brand: "Ikea", type: "Furniture", price: 40 },
    { name: "Bookshelf", brand: "Sauder", type: "Furniture", price: 150 },
    { name: "Sofa", brand: "Ashley", type: "Furniture", price: 800 },
    { name: "Dining Table", brand: "West Elm", type: "Furniture", price: 1200 },
    { name: "Coffee Table", brand: "Crate & Barrel", type: "Furniture", price: 400 },
    { name: "Running Shoes", brand: "Nike", type: "Clothing", price: 120 },
    { name: "Jacket", brand: "Columbia", type: "Clothing", price: 180 },
    { name: "Backpack", brand: "North Face", type: "Accessories", price: 130 },
    { name: "Water Bottle", brand: "Hydro Flask", type: "Accessories", price: 45 },
    { name: "Fitness Tracker", brand: "Fitbit", type: "Accessories", price: 150 },
    { name: "Yoga Mat", brand: "Manduka", type: "Accessories", price: 80 },
    { name: "Bicycle", brand: "Trek", type: "Sporting Goods", price: 900 },
    { name: "Tennis Racket", brand: "Wilson", type: "Sporting Goods", price: 180 },
    { name: "Basketball", brand: "Spalding", type: "Sporting Goods", price: 30 },
    { name: "Soccer Ball", brand: "Adidas", type: "Sporting Goods", price: 25 },
    { name: "Golf Clubs", brand: "Titleist", type: "Sporting Goods", price: 700 },
    { name: "Running Tights", brand: "Under Armour", type: "Clothing", price: 80 },
    { name: "Hiking Boots", brand: "Merrell", type: "Clothing", price: 150 },
    { name: "Winter Coat", brand: "Patagonia", type: "Clothing", price: 350 },
    { name: "Sun Hat", brand: "Outdoor Research", type: "Accessories", price: 35 },
    { name: "Sunglasses", brand: "Ray-Ban", type: "Accessories", price: 150 },
    { name: "Action Camera", brand: "GoPro", type: "Electronics", price: 400 },
    { name: "Portable Speaker", brand: "JBL", type: "Electronics", price: 100 },
    { name: "Home Theater System", brand: "Bose", type: "Electronics", price: 1500 },
    { name: "Gaming Console", brand: "Sony", type: "Electronics", price: 500 },
    { name: "TV", brand: "Samsung", type: "Electronics", price: 900 },
    { name: "Soundbar", brand: "LG", type: "Electronics", price: 300 },
    { name: "Portable Charger", brand: "Anker", type: "Accessories", price: 40 },
    { name: "Wireless Earbuds", brand: "Apple", type: "Accessories", price: 250 },
    { name: "Electric Toothbrush", brand: "Oral-B", type: "Appliances", price: 80 },
    { name: "Hair Dryer", brand: "Dyson", type: "Appliances", price: 400 },
    { name: "Fitness Bike", brand: "Peloton", type: "Sporting Goods", price: 2000 },
    { name: "Treadmill", brand: "NordicTrack", type: "Sporting Goods", price: 1800 },
    { name: "Protein Powder", brand: "Optimum Nutrition", type: "Food", price: 60 },
    { name: "Blender Bottle", brand: "BlenderBottle", type: "Accessories", price: 15 },
    { name: "Coffee Maker", brand: "Keurig", type: "Appliances", price: 150 },
    { name: "Air Fryer", brand: "Ninja", type: "Appliances", price: 120 }
];

console.log(products);

Product.insertMany(products)
    .then(() => {
        console.log("Productos insertados exitosamente");
        process.exit();
    })
    .catch(error => {
        console.log("Error al insertar productos: ", error);
        process.exit(1);
    });
