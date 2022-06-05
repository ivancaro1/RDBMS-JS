// const clase = require('../databases/ProdutcsClass.js')
const clase = require('../databases/ProductsClassDB.js')

const productos = new clase('productosDB')

const productsController = {
    saveProduct: function (producto) {
      return productos.save(producto)
    },
    getAllProducts: function () {
      return productos.getAll()
    }
  }
  
module.exports = productsController