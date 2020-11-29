const env = process.env.NODE_ENV;//获取环境参数
let MYSQL_CONFIG = null;
let REDIS_CONFIG = null;
//开发环境下
if (env === "dev") {
    //mysql
    MYSQL_CONFIG = {
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "application"
    };
}
//线上环境下
if (env === "production") {
    MYSQL_CONFIG = {
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "application"
    };
}
module.exports = {
    MYSQL_CONFIG,
    // REDIS_CONFIG
};