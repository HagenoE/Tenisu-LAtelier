import expressJSDocSwagger from 'express-jsdoc-swagger'
// import * as url from 'node:url'
import { type Express } from 'express'
import path from 'node:path'
// const dirname = url.fileURLToPath(new URL('..', import.meta.url))
const dirname = path.join(__dirname, '..')
console.log(dirname)
const options = {
  info: {
    version: '1.0.0',
    title: 'Tenisu',
    description: 'Api for L\'Atelier'
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './route/*.(t|j)s',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false
}
// C'est pas magique. En fait cet fonction implémente une route sur notre application express, qui
// prend en charge l'affichage d'une page web pour la doc.
// dans le module il va faire une sorte de router.get('/api-docs', webpageController)
export default (app: Express): void => { expressJSDocSwagger(app)(options) }
