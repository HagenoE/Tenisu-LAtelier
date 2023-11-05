import expressJSDocSwagger from 'express-jsdoc-swagger'
// import * as url from 'node:url'
import { type Express } from 'express'
import path from 'node:path'
// const dirname = url.fileURLToPath(new URL('..', import.meta.url))
const dirname = path.join(__dirname, '..')
console.log(dirname)
console.log(__dirname)
const options = {
  info: {
    version: '1.0.0',
    title: 'Tenisu',
    description: 'Api for L\'Atelier'
  },
  baseDir: `${dirname}`,
  filesPattern: ['./route/*'],
  swaggerUIPath: '/docs',
  exposeSwaggerUI: true
}

export default (app: Express): void => { expressJSDocSwagger(app)(options) }
