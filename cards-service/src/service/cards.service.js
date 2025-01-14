const databaseClient = require('../config/sqlite.config');
const cacheClient = require('../config/redis.config')

const sqliteClient = databaseClient.sqliteClient;
const redisClient = cacheClient.redisClient.clientConnection;

const createCard = async (cardData) => {
    const { id, cardHolderName,  cardType, cardNumber, expiryDate } = cardData;
    try {
        redisClient.set(id, JSON.stringify(cardData))
        const sql = 'INSERT INTO cards (id, card_holder_name, card_type, card_number, expiry_date) VALUES (?, ?, ?, ?, ?)';
        const params = [id, cardHolderName, cardType, cardNumber, expiryDate];
        await sqliteClient.run(sql, params, (err) => {
            if (err) {
                throw new Error('Failed to create card');
            }
            return cardData;
        });
        return cardData;
    } catch (error) {
        throw new Error('Failed to create card');
    }
};


const fetchAllCards = async () => {
    try {
        const rows = await new Promise((resolve, reject) => {
            sqliteClient.all('SELECT * FROM cards', (err, rows) => {
                if (err) {
                    return reject('Failed to fetch card');
                }
                resolve(rows);
            });
        });
        return rows;
    } catch (error) {
        throw new Error('Failed to fetch card');
    }
};

module.exports = { createCard, fetchAllCards };