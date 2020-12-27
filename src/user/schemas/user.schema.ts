import * as mongoose from 'mongoose';
import { Role } from "../../auth/types/roles.enum";

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    role: {
        type: Role,
        required: false
    },
});
