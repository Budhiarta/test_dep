/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "5TOhpYbeOiOIGUNfUw7c",
  DB_HOST = "containers-us-west-110.railway.app",
  DB_NAME = "railway",
  DB_PORT = "5459",
  DB_URL = "postgresql://postgres:5TOhpYbeOiOIGUNfUw7c@containers-us-west-110.railway.app:5459/railway"
} = process.env;

const db = new Sequelize(DB_URL, {
  define: {
    timestamps: false
  }
})


module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  db
};
