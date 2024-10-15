import { Schema, model } from "mongoose";

let collection = 'employees';

let schema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },  // Cargo
    salary: { type: Number, required: true }     // Salario
}, {
    timestamps: true
});

let Employee = model(collection, schema);
export default Employee;