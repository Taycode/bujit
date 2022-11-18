import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import {config} from "./config/config"
import cors from "cors"


const app = express()
const PORT = config.PORT

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req:Request, res:Response) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Listening to server on http://localhost:${PORT}`)
    console.log('Ctrl + C to cancel')
})

