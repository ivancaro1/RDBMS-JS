// usuario root
const adminDbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'mysqlpassword',
    database: 'db_backendch'
}

function getConfig (mode) {
    return mode === 'mysql'
      ? {
          client: 'mysql2',
          connection: adminDbConfig
        }
      : {
          client: 'sqlite3',
          connection: {
            filename: './DB/db.sqlite',
            useNullAsDefault: true
          }
        }
  }

module.exports = {
    getConfig
}