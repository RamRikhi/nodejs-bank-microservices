const express = require("express");
const cardsController = require("../controller/cards.controller");
const router = express.Router();

const { createCards, fetchAllCard } = cardsController;

router.post("/create", (req, res) => {
  createCards(req, res).then((data) => {
    let response;
    let statusCode;
    if (data === undefined || data === null) {
      statusCode = 500;
      response = {
        status: "faild",
        message: "user unable to create",
        data: null,
        timestamp: new Date(),
        error: {
          erroCode: "USR-500",
          message: "something went wrong",
        },
      };
    } else {
      statusCode = 201;
      response = {
        status: "success",
        message: "user created successfully",
        data: data,
        timestamp: new Date(),
        error: null,
      };
    }
    res.status(statusCode).send(response);
  });
});

router.get("/fetch", (_req, res) => {
  fetchAllCard(_req, res).then((data) => {
    res.send({
      status: "success",
      message: "usersfetched successfully",
      data: data,
      timestamp: new Date(),
      error: null,
    });
  });
});

module.exports = router;
