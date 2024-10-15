import "dotenv/config.js";
import '../../config/database.js';
import Employee from '../Employee.js';

let employees = [
    {
        name: "Luis Fernández",
        position: "Gerente",
        salary: 4500
    },
    {
        name: "Carla Pérez",
        position: "Asistente Administrativa",
        salary: 2800
    },
    {
        name: "Santiago López",
        position: "Desarrollador de Software",
        salary: 3500
    },
    {
        name: "Mariana Gómez",
        position: "Especialista en Marketing",
        salary: 3200
    },
    {
        name: "Pedro Martínez",
        position: "Soporte Técnico",
        salary: 2400
    },
    {
        name: "Daniela Ruiz",
        position: "Contadora",
        salary: 3000
    },
    {
        name: "Miguel Ramírez",
        position: "Analista Financiero",
        salary: 3800
    },
    {
        name: "Ana Torres",
        position: "Diseñadora Gráfica",
        salary: 2900
    },
    {
        name: "Juan Méndez",
        position: "Recursos Humanos",
        salary: 3300
    },
    {
        name: "Lorena Sánchez",
        position: "Jefa de Ventas",
        salary: 4000
    },
    {
        name: "Fernando Morales",
        position: "Consultor de TI",
        salary: 3700
    },
    {
        name: "Julia Vargas",
        position: "Recepcionista",
        salary: 2100
    },
    {
        name: "Raúl Herrera",
        position: "Ingeniero de Calidad",
        salary: 3400
    },
    {
        name: "Patricia Delgado",
        position: "Especialista en Logística",
        salary: 3100
    },
    {
        name: "Roberto Castro",
        position: "Gerente de Proyecto",
        salary: 4200
    }
];

console.log(employees);

Employee.insertMany(employees)
    .then(() => {
        console.log("Empleados insertados exitosamente");
        process.exit();
    })
    .catch(error => {
        console.log("Error al insertar empleados: ", error);
        process.exit(1);
    });