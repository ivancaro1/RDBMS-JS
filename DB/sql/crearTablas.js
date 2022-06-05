//import { clienteSqlAdmin as knex } from './clienteSql.js'
const { clienteSqlAdmin:knex} = require('./clienteSql.js')

try {
    knex.schema.dropTable('productosDB')
    const exists = knex.schema.hasTable('productosDB')
    if (!exists) {
            knex.schema.createTable('productosDB', tabla => {
            tabla.increments('id'),
                tabla.string('title'),
                tabla.float('price'),
                tabla.string('thumbnail')
        })
        console.log('tabla "productosDB" creada!')
    } else {
        console.log('la tabla "productosDB" ya existe. no se realizaron cambios.')
    }
} catch (error) {
    console.log(`fallo la operacion: ${error.message}`)
} finally {
    knex.destroy();
}