import mongoose from "mongoose"
const { Schema } = mongoose;



const userSchema = new Schema({
    user: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], required: true },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
}, { timestamps: true });


const User = mongoose.model('User', userSchema);


export default User;
