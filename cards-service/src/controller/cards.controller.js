const cardsService = require("../service/cards.service");

const { createCard, fetchAllCards } = cardsService;

const createCards = async (req, res) => {
  try {
    const data = await createCard(req.body);
    return data;
  } catch (error) {
    return {
      status: "failed",
      message: "Create card failed",
    };
  }
};


const fetchAllCard = async () => {
  try {
    const data = await fetchAllCards();
    return data;
  } catch (error) {
    return {
      status: "failed",
      message: "Fetch card failed",
    };
  }
};

module.exports = { createCards, fetchAllCard };
