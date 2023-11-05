import http from 'node:http'
import './helper/env.helper'
import server from './server'

const app = http.createServer(server)
const port = process.env.PORT ?? 3000

app.listen(port)
