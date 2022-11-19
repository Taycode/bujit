import { Request, Response } from 'express';
import { comparePassword, generatePassword } from './user.service';
import { UserRepository } from '../../database/repository/user.repository';
import { signPayload } from '../../util/jwt.util';
import {ICustomRequest} from "../../interface/custom-request.interface";

export class UserController {
    async loginUser(req: Request, res: Response) {
        const {email, password} = req.body;
        if (!email) {
            res.status(400).send({message: "Email is required/malformed"});
        }
        if (!password) {
            res.status(400).send({message: "Password is required"});
        }

        const user = await UserRepository.findOne({email});

        if (!user) {
            return res.status(401).send({message: "User was not found"});
        }

        const validatePassword = await comparePassword(password, user.passwordHash);

        if (!validatePassword) {
            return res.status(400).send({message: "Invalid password"});
        }

        const token = signPayload({ email: user.email, _id: user._id});
        return res.status(200).json({
            status: true,
            message: 'Login successful',
            data: { token },
        });
    }

    async registerUser(req: Request, res: Response) {
        const { email, password } = req.body;

        const oldUser = await UserRepository.findOne({ email });

        if (oldUser) {
            return res.status(400).json({
                status: false,
                message: 'Email already exists',
            });
        }
        const passwordHash = await generatePassword(password);

        const payload = {
            email,
            passwordHash
        };

        const newUser = await UserRepository.create(payload);

        return res.status(200).json({
            status: true,
            message: 'Registration successful',
            data: {
                email: newUser.email,
            }
        });
    }

    async fetchLoggedInUser(req: ICustomRequest, res: Response) {
        const { user } = req;
        return res.status(200).json({
            status: true,
            message: 'User fetched',
            data: user,
        })
    }
}
