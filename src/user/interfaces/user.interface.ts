import { Document } from 'mongoose';
import { Role } from "../../auth/types/roles.enum";

export interface IUser extends Document {
    readonly id: string,
    readonly email: string,
    readonly password: string,
    readonly name: string,
    readonly phone: string
    readonly role: Role
    readonly createdAt: Date;
    readonly updatedAt: Date;

}
