import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = model('user', UserSchema);