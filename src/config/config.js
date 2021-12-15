module.exports = {
    developement:{
        database:{
            host:'localhost',
            port:3306,
            name: 'cursoNodeMySql',
            dialect: 'mysql',
            user: 'root',
            password:'Juli@16072@21'

        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}

    