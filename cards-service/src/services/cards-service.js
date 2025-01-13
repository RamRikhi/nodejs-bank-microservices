const databaseClient = require('../config/database-config');

const sqliteClient = databaseClient.sqliteClient;

const createCard = async (cardData) => {
    console.log('cardData', JSON.stringify(cardData));
    const { id, cardHolderName,  cardType, cardNumber, expiryDate } = cardData;
    try {
        const sql = 'INSERT INTO cards (id, card_holder_name, card_type, card_number, expiry_date) VALUES (?, ?, ?, ?, ?)';
        const params = [id, cardHolderName, cardType, cardNumber, expiryDate];
        await sqliteClient.run(sql, params, (result, err) => {
            if (err) {
                throw new Error('Failed to create card');
            }
            console.log('result', result);
            return cardData;
        });
        return cardData;
    } catch (error) {
        throw new Error('Failed to create card');
    }
};

const getCard = async (cardId) => {
    try {
        const card = await sqliteClient.findById(cardId);
        return card;
    } catch (error) {
        throw new Error('Failed to fetch card');
    }
};

module.exports = { createCard, getCard };