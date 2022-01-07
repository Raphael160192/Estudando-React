module.exports = {
    development:{
        database:{
            host:'localhost',
            port:3306,
            name: 'cursoNodeMySql',
            dialect: 'mysql',
            user: 'root',
            password:'Julia@123'

        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}


