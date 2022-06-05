const { clienteSqlAdmin } = require('../DB/sql/clienteSql.js') 
//import { clienteSqlUser } from '../clienteSql.js'
// Star of class Contenedor
module.exports = class ContenedorDBProducts {

    constructor(nombreTabla){
        this.nombreTabla = nombreTabla;
    }

    async save(producto){   
        try {
            const result = await clienteSqlAdmin.insert(producto).into(this.nombreTabla)
            return result
        } catch (error) {
            throw error
        }
    }

    async getById(id_producto){
        try {
            const personas = await clienteSqlAdmin.select('*').from(this.nombreTabla).where({ id: id_producto })
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
            const productos = await clienteSqlAdmin.select('*').from(this.nombreTabla)
            return productos
        } catch (error) {
            throw error;
        }
    }
    
    async deleteById(id_producto){                                    
        try {
            await clienteSqlAdmin.delete().from(this.nombreTabla).where({ id: id_producto })
        } catch (error) {
            throw error;
        }
    }

    async deleteAll(){
        try {
            await clienteSqlAdmin.delete().from(this.nombreTabla)
        } catch (error) {
            throw error;
        }
    }

    // async writeFile(objeto){
    //     try{
    //         await fs.promises.writeFile(this.nombreTabla,JSON.stringify(objeto,null,2))
    //     }catch(err){
    //         throw err;              // if there is an error print a error message
    //     }
    // }

    async generateID(){   
        return parseInt(`${Date.now()}`)
    }

    async replaceProduct (id_producto,datos){
        try {
            const replacement = await clienteSqlAdmin.update(datos).from(this.nombreTabla).where({ id: id_producto })
            return replacement
        } catch (error) {
            throw error;
        }
    }
 }