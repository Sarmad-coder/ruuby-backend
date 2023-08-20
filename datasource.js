const { DataSource } = require("typeorm")

const AppDataSource = new DataSource({
    type: "postgres",
    host: "95.179.207.65",
    port: 5432,
    username: "db_admin",
    password: "abuzar.1047",
    database: "ruuby",

    entities: [
        "dist/models/*.js",
    ],
    migrations: [
        "dist/migrations/*.js",
    ],
})

module.exports = {
    datasource: AppDataSource,
}
