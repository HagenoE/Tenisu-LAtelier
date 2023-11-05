import './helper/env.helper'
import http from 'node:http'
import server from './server'

const app = http.createServer(server)
const port = process.env.PORT ?? 3000
console.log(process.env.PORT)

app.listen(port)
