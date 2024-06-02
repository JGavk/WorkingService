const config = {
    user: "postgres",
    database: "WorkingServideBD",
    password: "admin123",
    host: "localhost",  // Asegúrate de que el host es correcto
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

module.exports = config;