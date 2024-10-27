import express, { Request, Response } from 'express'

const api = express()

api.use(express.json())

api.get('/salutations', (req : Request, res : Response) => {
    res.status(200).json({salutation: `Hello ${(req.body.name) ? req.body.name : 'User'}`})
})

export default api