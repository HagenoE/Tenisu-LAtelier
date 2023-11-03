import './helper/env.helper'
import http from 'node:http'
import server from './server'

// TODO fix .env with zod
const app = http.createServer(server)
const port = process.env.PORT ?? 3000

app.listen(port)
