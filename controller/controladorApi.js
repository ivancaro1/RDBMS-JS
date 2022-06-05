const { getConfig } = require('../knexConfig.js')
const clase = require('../APIs/ProductsClassDB.js')

const productos = new clase(getConfig('sqlite3'),'productos')
productos.crearTabla()

const productsController = {
    saveProduct: function (producto) {
      return productos.save(producto)
    },
    getAllProducts: function () {
      return productos.getAll()
    }
  }
  
module.exports = productsController