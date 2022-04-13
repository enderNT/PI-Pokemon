require('dotenv').config()
const {
  DB_USER, DB_PASSWORD, DB_NAME,
  DB_HOST, DB_DIALECT, DB_PORT
  } = process.env

module.exports = {
  development: {
    username: `${DB_USER}`,
    password: `${DB_PASSWORD}`,
    database: `${DB_NAME}`,
    host: `${DB_HOST}`,
    dialect: `${DB_DIALECT}`,
    port: DB_PORT,
    ssl: true,
    logging: false,
    pool: {
      min: 1,
      max: 3,
      idle: 10000,
    },
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
  },
  test: {
    username: `${DB_USER}`,
    password: `${DB_PASSWORD}`,
    database: `${DB_NAME}`,
    host: `${DB_HOST}`,
    dialect: `${DB_DIALECT}`,
    ssl: true,
    logging: false,
    pool: {
      min: 1,
      max: 3,
      idle: 10000,
    },
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
  },
  production: {
    username: `${DB_USER}`,
    password: `${DB_PASSWORD}`,
    database: `${DB_NAME}`,
    host: `${DB_HOST}`,
    dialect: `${DB_DIALECT}`,
    port: DB_PORT,
    ssl: true,
    logging: false,
    pool: {
      min: 1,
      max: 3,
      idle: 10000,
    },
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
  },
}

