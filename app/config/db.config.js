const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = {
    HOST: "hattie.db.elephantsql.com",
    USER: "qyaapmpe",
    PASSWORD: "Xpj-CgOqKAF3ycUoQGafxuKEwFCZkev9",
    DB: "qyaapmpe",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: config.host,
                port: config.port,
                database: config.database,
                username: config.user,
                password: config.password,
                ssl: {
                    rejectUnauthorized: false,
                },
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            },
            options: {
                ssl: true,
            },
        },
    },
});
