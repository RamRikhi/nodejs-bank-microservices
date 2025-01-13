const createCard = require('../services/cards-service');

const createCards = async (req, res) => {
  try {
     const data = await createCard.createCard(req.body);
     console.log("data: ", data)
    return data
  } catch (error) {
    return {
      status: 'failed',
      message: 'Create card failed'
    };
  }
};

module.exports = createCards;