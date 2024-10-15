import "dotenv/config.js";
import '../../config/database.js';
import Store from '../Store.js';

let stores = [
    {
        name: "Tienda Centro",
        address: "Calle Principal 123, Ciudad Central",
        phone: 123456789
    },
    {
        name: "Tienda Norte",
        address: "Avenida Norte 456, Barrio Alto",
        phone: 987654321
    },
    {
        name: "Tienda Sur",
        address: "Calle Sur 789, Barrio Bajo",
        phone: 564738291
    },
    {
        name: "Tienda Este",
        address: "Avenida Este 321, Sector Comercial",
        phone: 102938475
    },
    {
        name: "Tienda Oeste",
        address: "Calle Oeste 654, Zona Residencial",
        phone: 109283746
    }
];

// Verificar que los datos están correctamente formateados
console.log(stores);

Store.insertMany(stores)
    .then(() => {
        console.log("Tiendas insertadas exitosamente");
        process.exit();
    })
    .catch(error => {
        console.log("Error al insertar tiendas: ", error);
        process.exit(1);
    });
