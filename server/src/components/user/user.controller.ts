import { Request, Response } from 'express';
import { comparePassword, generatePassword } from './user.service';
import { UserRepository } from '../../database/repository/user.repository';

export class UserController {
    userRepository = new UserRepository();

    async loginUser(req: Request, res: Response) {
        const {email, password} = req.body;
        if (!email) {
            res.status(400).send({message: "Email is required/malformed"});
        }
        if (!password) {
            res.status(400).send({message: "Password is required"});
        }

        const user = await this.userRepository.findOne({email});

        if (!user) {
            return res.status(401).send({message: "User was not found"});
        }

        const validatePassword = await comparePassword(password, user.passwordHash);

        if (!validatePassword) {
            return res.status(401).send({message: "Invalid Password"});
        }

        // toDo: USE JWT
    }

    async registerUser(req: Request, res: Response) {
        const {email, plainTextPassword } = req.body;

        const passwordHash = generatePassword(plainTextPassword);

        const payload = {
            email,
            passwordHash
        };

        const newUser = await this.userRepository.create(payload);

        return res.status(200).json({
            status: true,
            message: 'Registration successful',
            data: {
                email: newUser.email,
            }
        });
    }
}