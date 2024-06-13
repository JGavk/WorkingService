const config = {
    DB: process.env.DB,
    USER: process.env.DB_USER,
    DATABASE: process.env.DB_NAME,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool: {
        max: process.env.DB_MAX_POOL,
        min: process.env.DB_MIN_POOL,
        acquire: process.env.DB_ACQUIRE_POOL,
        idle: process.env.DB_IDLE_POOL
      }
};

module.exports = config;