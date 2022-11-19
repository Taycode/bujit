import { Schema, model } from 'mongoose';

export interface IUser {
    email: string;
    passwordHash: string;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const UserModel = model('user', UserSchema);
