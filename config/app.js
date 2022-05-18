require('dotenv').config();

module.exports = {
    LOCAL_URL: {
        URL: process.env.URL,
        PORT: process.env.PORT,
    },
    JWT: {
        SECRET: process.env.JWT_SECRET,
    },
    DATABASE: {
        MONGO: {
            URL: process.env.DATABASE_URL,
            PORT: process.env.DATABASE_PORT,
            DATABASE: process.env.DATABASE_NAME,
        }
    },
    DEFAULT: {
        USERNAME: "storage\\defaults\\user.png",
        PROFILENAME: "storage:\\defaults\\profile.png"
    },
    STORGAE: {
        LOCAL: process.env.STORGAE
    }
};