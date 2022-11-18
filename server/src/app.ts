import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

export const App = {
  async boot () {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    app.get('/', async (req: Request, res: Response) => {
      res.send('Hello World')
    })
    return app
  }
}
