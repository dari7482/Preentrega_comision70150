import mongoose from "mongoose"
const { Schema } = mongoose;


const petSchema = new Schema({
    owner: { type: String },
    adopted: { type: Boolean, default: false },
    petid: { type: String },
    age: { type: Number, required: true },
    type: { type: String, enum: ['CAT', 'DOG'], required: true },
    breed: { type: String, required: true },
}, { timestamps: true });

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
