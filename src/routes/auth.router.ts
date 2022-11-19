import { Router, Request, Response } from "express";
import { User } from "../database/model/user";
import * as bcrypt from "bcrypt"

const router: Router = Router()

async function generatePassword(textPassword:string): Promise<string> {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(textPassword, salt);
}

async function comparePassword(textPassword:string, hash:string): Promise<boolean> {
    return await bcrypt.compare(textPassword, hash);
}

router.post('/signup', (req:Request, res:Response) => {
    const {email, plainTextPassword } = req.body

    const passwordHash = generatePassword(plainTextPassword)
    
    const new_user = new User({
        email: email,
        passwordHash: passwordHash
    }).save()

})

router.post('login', async (req:Request, res:Response) => {
    const {email, password} = req.body
    if (!email) {
        res.status(400).send({message: "Email is required/malformed"})
    }
    if (!password) {
        res.status(400).send({message: "Password is required"})
    }

    const user = await User.findOne({email:email})
    if (!user) {
        return res.status(401).send({message: "User was not found"})
    }
    const validatePassword = await comparePassword(password, user.passwordHash)

    if (!validatePassword) {
        return res.status(401).send({message: "Invalid Password"})
    }
    
})

