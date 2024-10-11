import "dotenv/config.js";
import '../../config/database.js';
import User from '../User.js';

let users = [
    {
        name: "Ana García",
        email: "ana.garcia@email.com",
        password: "clave123",
        photo: "https://ejemplo.com/fotos/ana.jpg",
        role: 1
    },
    {
        name: "Carlos Rodríguez",
        email: "carlos.rodriguez@email.com",
        password: "segura456",
        photo: "https://ejemplo.com/fotos/carlos.jpg",
        role: 2
    },
    {
        name: "Elena Martínez",
        email: "elena.martinez@email.com",
        password: "elena2024",
        photo: "https://ejemplo.com/fotos/elena.jpg",
        role: 1
    },
    {
        name: "David López",
        email: "david.lopez@email.com",
        password: "davidpass",
        photo: "https://ejemplo.com/fotos/david.jpg",
        role: 3
    },
    {
        name: "Isabel Sánchez",
        email: "isabel.sanchez@email.com",
        password: "isa1234",
        photo: "https://ejemplo.com/fotos/isabel.jpg",
        role: 2
    },
    {
        name: "Francisco Pérez",
        email: "francisco.perez@email.com",
        password: "fran5678",
        photo: "https://ejemplo.com/fotos/francisco.jpg",
        role: 1
    },
    {
        name: "María Gómez",
        email: "maria.gomez@email.com",
        password: "mariag2024",
        photo: "https://ejemplo.com/fotos/maria.jpg",
        role: 2
    },
    {
        name: "Jorge Fernández",
        email: "jorge.fernandez@email.com",
        password: "jorgef90",
        photo: "https://ejemplo.com/fotos/jorge.jpg",
        role: 1
    },
    {
        name: "Laura Torres",
        email: "laura.torres@email.com",
        password: "lau3456",
        photo: "https://ejemplo.com/fotos/laura.jpg",
        role: 3
    },
    {
        name: "Roberto Díaz",
        email: "roberto.diaz@email.com",
        password: "rob1980",
        photo: "https://ejemplo.com/fotos/roberto.jpg",
        role: 2
    }
];

// Verificar que los datos están correctamente formateados
console.log(users);

User.insertMany(users)
    .then(() => {
        console.log("Usuarios insertados exitosamente");
        process.exit();
    })
    .catch(error => {
        console.log("Error al insertar usuarios: ", error);
        process.exit(1);
    });
