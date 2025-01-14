const express = require("express");
const cardsController = require("../controllers/cards-controller");
const router = express.Router();

const { createCards, fetchAllCard } = cardsController;

router.post("/create", (req, res) => {
  createCards(req, res).then((data) => {
    res.send(data);
  });
});

router.get("/fetch", (_req, res) => {
  fetchAllCard(_req, res).then((data) => {
    res.send(data);
  });
});

module.exports = router;
