// usuario root
const adminDbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'mysqlpassword',
    database: 'coderhouse'
}

// usuario coder 
const userDbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'lectorch',
    password: 'Lectorch123!',
    database: 'coderhouse'
}

function getConfig(modo) {
    return {
        client: 'sqlite3',
        connection: { filename: './DB/sql/DB/db.sqlite' },
        useNullAsDefault: true
    }
}

module.exports = {
    getConfig
}