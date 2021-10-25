import express, { Request, Response } from 'express'
import mustache from 'mustache-express'
import path from 'path'
import dotenv from 'dotenv'

import mainRoutes from './routes/home'

dotenv.config()

const server = express()

// Configure public media
server.use(express.static(path.join(__dirname, '../public')))

// Configure mustache
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.urlencoded({extended: true}))

// Configure routes
server.use('/', mainRoutes)
server.use((_: Request, res: Response) => {
    res.status(404).render('pages/404')
})

// Start server
server.listen(process.env.PORT)