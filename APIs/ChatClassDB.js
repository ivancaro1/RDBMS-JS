const knex = require('knex')
const moment = require('moment') 
//import { clienteSqlUser } from '../clienteSql.js'
// Star of class Contenedor
module.exports = class ContenedorDBProducts {

    constructor(config,nombreTabla){
        this.nombreTabla = nombreTabla;
        this.sql = knex(config);
    }

    async crearTabla () {
        try {
                const exists = await this.sql.schema.hasTable(this.nombreTabla)
                if (!exists) {
                    await this.sql.schema.createTable(this.nombreTabla, tabla => {
                        tabla.increments('id').primary(),
                            tabla.string('user'),
                            tabla.string('message'),
                            tabla.string('timestamp')
                    })
                    console.log('Tabla de chat creada en esquema db_backendhs.messages!')
                } else {
                    console.log('la tabla de mensajes ya existe. no se realizaron cambios.')
                }
        } catch (e) {
          console.log('Data Base no iniciada, ocurrió un problema!')
          throw e
        }
      }

    async save(producto){   
        try {
            const result = await this.sql.insert({ ...producto, timestamp: moment().format('DD/MM/YYYY HH:MM:SS') }).into(this.nombreTabla)
            return result
        } catch (error) {
            throw error
        }
    }

    async getById(id_producto){
        try {
            const personas = await this.sql.select('*').from(this.nombreTabla).where({ id: id_producto })
            if (personas.length === 0) {
                const error = new Error('found')
                error.tipo = 'db not found'
                throw error
            } else {
                return personas[0]
            }
        } catch (error) {
            throw error
        }
    }

    async getAll(){
        try {
            const productos = await this.sql(this.nombreTabla).select('*')
            return productos
        } catch (error) {
            throw error;
        }
    }
    
    async deleteById(id_producto){                                    
        try {
            await this.sql.delete().from(this.nombreTabla).where({ id: id_producto })
        } catch (error) {
            throw error;
        }
    }

    async deleteAll(){
        try {
            await this.sql.delete().from(this.nombreTabla)
        } catch (error) {
            throw error;
        }
    }

    async generateID(){   
        return parseInt(`${Date.now()}`)
    }

    async replaceProduct (id_producto,datos){
        try {
            const replacement = await this.sql.update(datos).from(this.nombreTabla).where({ id: id_producto })
            return replacement
        } catch (error) {
            throw error;
        }
    }

    close() {
        this.knex.destroy();
      }
 }