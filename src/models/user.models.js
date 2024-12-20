import mongoose from "mongoose"
const { Schema } = mongoose;


const petSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User', default: null }, // Referencia al esquema de usuarios
    adopted: { type: Boolean, default: false },
    age: { type: Number, required: true },
    type: { type: String, enum: ['CAT', 'DOG'], required: true }, // Limitamos el tipo a 'CAT' o 'DOG'
    breed: { type: String, required: true },
}, { timestamps: true });


const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    user: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], required: true },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }], // Relación con el esquema de mascotas
}, { timestamps: true });


const User = mongoose.model('User', userSchema);
const Pet = mongoose.model('Pet', petSchema);

module.exports = { User, Pet };
