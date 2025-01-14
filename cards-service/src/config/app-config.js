

const env = {
    port: process.env.PORT || 5001,
    jwtSecret: process.env.JWT_SECRET || 'secret-key',
};

module.exports = env;