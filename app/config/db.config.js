
module.exports = {
    HOST: "localhost",
    USER: "fred",
    PASSWORD: "123456",
    DB: "tutorial_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
